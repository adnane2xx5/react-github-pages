from fastapi import APIRouter, UploadFile, File
from openai import OpenAI
import os

router = APIRouter(prefix="/process", tags=["Image Processing"])

@router.post("/analyze")
async def analyze_image(file: UploadFile = File(...)):
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    image_bytes = await file.read()

    result = client.responses.create(
        model="gpt-4o-mini",
        input="Décris cette image en détail.",
        image=[image_bytes]
    )

    return {"analysis": result.output_text}
