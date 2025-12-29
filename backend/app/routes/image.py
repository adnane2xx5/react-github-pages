from fastapi import APIRouter, Form
from openai import OpenAI

router = APIRouter()
client = OpenAI(api_key="YOUR_API_KEY_HERE")

@router.post("/generate-image")
def generate_image(prompt: str = Form(...)):
    result = client.images.generate(
        model="gpt-image-1",
        prompt=prompt,
        size="1024x1024"
    )
    return {"image_url": result.data[0].url}
