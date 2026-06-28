import numpy as np

from app.model_loader import (
    rf_model,
    kmeans_model,
    scaler,
)


def analyze_water(data):
    """
    Input:
        temperature
        dissolved_oxygen
        ph
        turbidity

    Output:
        predicted_weight
        cluster
        cluster_label
        interpretation
    """

    features = np.array([
        [
            data.temperature,
            data.dissolved_oxygen,
            data.ph,
            data.turbidity
        ]
    ])

    # Prediksi berat ikan
    predicted_weight = float(
        rf_model.predict(features)[0]
    )

    # Clustering kualitas air
    scaled = scaler.transform(features)

    cluster = int(
        kmeans_model.predict(scaled)[0]
    )

    # Label cluster
    labels = {
        0: "Sengat Baik",
        1: "Baik",
        2: "Cukup"
    }

    interpretations = {
        0: "Kondisi kualitas air sangat baik untuk pertumbuhan ikan.",
        1: "Kondisi kualitas air cukup baik, tetapi perlu pemantauan.",
        2: "Kondisi kualitas air kurang baik. Disarankan segera dilakukan tindakan perbaikan."
    }

    return {
        "predicted_weight": round(predicted_weight, 2),
        "cluster": cluster,
        "cluster_label": labels.get(cluster, "Unknown"),
        "interpretation": interpretations.get(cluster, "-")
    }