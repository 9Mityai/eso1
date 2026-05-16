from fastapi import FastAPI, UploadFile, File
import shutil
import os
from dotenv import load_dotenv
from backend.gemini_service import analyze_text

load_dotenv()
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
        analysis = analyze_text(text)
        return {"analysis": analysis}
    except Exception as e:
        return {"error": str(e)}