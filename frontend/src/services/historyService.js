import api from "../api/api";

/**
 * ============================
 * GET ALL HISTORY
 * ============================
 */
export async function getHistory(params = {}) {

    const response = await api.get("/history", {
        params,
    });

    return response.data;

}

/**
 * ============================
 * GET HISTORY BY ID
 * ============================
 */
export async function getHistoryById(id) {

    const response = await api.get(`/history/${id}`);

    return response.data;

}

/**
 * ============================
 * UPDATE HISTORY
 * (Analyze Again)
 * ============================
 */
export async function updateHistory(id, data) {

    const response = await api.put(`/history/${id}`, data);

    return response.data;

}

/**
 * ============================
 * DELETE HISTORY
 * ============================
 */
export async function deleteHistory(id) {

    const response = await api.delete(`/history/${id}`);

    return response.data;

}