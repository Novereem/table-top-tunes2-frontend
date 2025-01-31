import {LoginResponseDTO} from "../types/auth.ts";
import {ApiResponse} from "../types/base.ts";

export const loginUser = async (username: string, password: string): Promise<string> => {
    const response = await fetch("https://localhost:44318/authentication/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error("Invalid credentials");

    const result: ApiResponse<LoginResponseDTO> = await response.json();

    if (!result.data || !result.data.token) {
        throw new Error("Invalid response structure");
    }

    return result.data.token;
};