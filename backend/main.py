from fastapi import FastAPI, UploadFile, File
import shutil
import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
app = FastAPI()


UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.get("/")
def root():
    return {"status": "API running"}

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    file_path = f"{UPLOAD_DIR}/{file.filename}"
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"filename": file.filename, "path": file_path}

@app.post("/analyze/")
async def analyze(text: str):
    try:
        model = genai.GenerativeModel("gemini-1.5-pro")

        prompt = f"""
You are a clinical decision support system.

Analyze the patient input and provide:

1. Summary
2. Differential diagnosis (top 3)
3. Red flags
4. Treatment options
5. Questions for doctor

Patient input:
{text}
"""

        response = model.generate_content(prompt)

        return {"analysis": response.text}

    except Exception as e:
        return {"error": str(e)}
