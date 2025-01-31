export const getStoredTheme = (): "light" | "dark" => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
};

export const saveTheme = (theme: "light" | "dark") => {
    localStorage.setItem("theme", theme);
};