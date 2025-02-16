import {LoginResponseDTO} from "../types/auth";
import {ApiResponse} from "../types/base";

export const loginUser = async (username: string, password: string): Promise<ApiResponse<LoginResponseDTO>> => {
    const response = await fetch("https://localhost:44318/authentication/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        let errorMessage = "Login failed";
        try {
            const errorData = await response.json();
            errorMessage = errorData.userMessage || errorMessage;
        } catch {
            // Fallback remains
        }
        throw new Error(errorMessage);
    }

    return await response.json();
};