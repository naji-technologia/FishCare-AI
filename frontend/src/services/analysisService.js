import api from "../api/api";

/**
 * Kirim data sensor ke Laravel
 * Laravel akan meneruskan ke FastAPI
 */
export async function analyzeWater(data) {

    const response = await api.post("/analyze", data);

    return response.data;

}