from pathlib import Path
import joblib

BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_DIR = BASE_DIR / "models"

rf_model = joblib.load(MODEL_DIR / "random_forest.joblib")
kmeans_model = joblib.load(MODEL_DIR / "kmeans.joblib")
scaler = joblib.load(MODEL_DIR / "scaler.joblib")
selected_features = joblib.load(MODEL_DIR / "selected_features.joblib")