from pydantic import BaseModel


class PredictionRequest(BaseModel):
    temperature: float
    dissolved_oxygen: float
    ph: float
    turbidity: float


class PredictionResponse(BaseModel):
    predicted_weight: float
    cluster: int
    cluster_label: str
    interpretation: str