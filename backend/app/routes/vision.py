from fastapi import FastAPI, File, UploadFile, Form
from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY")

app = FastAPI()

@app.post("/vision")
async def analyze_image(image: UploadFile = File(...), question: str = Form(...)):
    content = await image.read()

    response = client.chat.completions.create(
        model="gpt-4o-mini", 
        messages=[
            {"role": "user", "content": [
                {"type": "input_text", "text": question},
                {"type": "input_image", "image": content}
            ]}
        ]
    )

    return {"analysis": response.choices[0].message["content"]}
from fastapi import APIRouter, UploadFile, File, Form
from services.ai import analyze_image

router = APIRouter()

@router.post("/vision")
async def analyse_image_route(file: UploadFile = File(...)):
    # Lire le contenu du fichier
    contents = await file.read()

    # Appeler le service d'IA
    description = analyze_image(contents)

    # Renvoyer uniquement la description (texte)
    return JSONResponse(content={"description": description})

