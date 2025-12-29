import os
from openai import OpenAI

def chat_ai(prompt: str) -> str:
    """
    Appel IA OpenAI (chat)
    """
    api_key = os.getenv("OPENAI_API_KEY")

    if not api_key:
        return "❌ Clé OpenAI introuvable. Vérifie le fichier .env"

    client = OpenAI(api_key=api_key)

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content
