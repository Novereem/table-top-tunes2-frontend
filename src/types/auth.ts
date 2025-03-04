export interface AuthContextType {
    token: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface LoginResponseDTO {
    token: string;
}