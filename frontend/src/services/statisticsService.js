import api from "../api/api";

export async function getStatistics(){

    const response = await api.get("/statistics");

    return response.data;

}