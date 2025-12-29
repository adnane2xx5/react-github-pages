from dotenv import load_dotenv
from pathlib import Path

env_path = Path(__file__).parent / ".env"
load_dotenv(dotenv_path=env_path)

from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.routes.process_image import router as process_router
from app.routes.vision import router as vision_router
from app.routes.chat import router as chat_router
from app.routes.image import router as image_router

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",   # React
        "http://127.0.0.1:3000"    # React (autre forme)
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ajouter chaque router
app.include_router(process_router, prefix="/process", tags=["Image Processing"])
app.include_router(vision_router, prefix="/vision", tags=["Vision"])
app.include_router(chat_router, prefix="/chat", tags=["Chat"])
app.include_router(image_router, prefix="/image", tags=["Image"])
import os
print("OPENAI_API_KEY =", os.getenv("OPENAI_API_KEY"))
@app.get("/")
def home():
    return {
        "status": "online",
        "message": "Backend WAC FastAPI + IA fonctionne 🚀"
    }
