import api from "../api/api";

export const login = async (email, password) => {
    const response = await api.post("/login", {
        email,
        password,
    });

    return response.data;
};

export const logout = async () => {
    try {
        await api.post("/logout");
    } catch (error) {}

    localStorage.removeItem("token");
};

export async function register(data) {

    const response = await api.post("/register", data);

    return response.data;

}