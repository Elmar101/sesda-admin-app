export interface User {
    userName: string | null;
    password?: string | null;
    showPassword?: boolean;
    showLoader?: boolean;
}