from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY_HERE")

def chat_with_ai(prompt: str):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message["content"]

def analyze_image(image_bytes: bytes, question: str):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": [
                {"type": "input_text", "text": question},
                {"type": "input_image", "image": image_bytes}
            ]}
        ]
    )
    return response.choices[0].message["content"]
