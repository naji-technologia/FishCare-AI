from fastapi import FastAPI
from app.schemas import PredictionRequest
from app.predict import analyze_water

app = FastAPI(
    title="FishCare AI API",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "FishCare AI API is running"
    }


@app.post("/analyze")
def analyze(request: PredictionRequest):
    return analyze_water(request)