from fastapi import APIRouter
from pydantic import BaseModel
from app.services.ai_service import chat_ai

router = APIRouter()  # ❌ PAS de prefix ici

class ChatRequest(BaseModel):
    prompt: str

@router.post("/ask")
def chat(data: ChatRequest):
    return {"answer": chat_ai(data.prompt)}
