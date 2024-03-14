import { jwtDecode } from "jwt-decode";

export const verifyJWT = (token: string) => {
    return jwtDecode(token);
};
