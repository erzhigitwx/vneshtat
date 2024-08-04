import {getAccessToken, getRefreshToken, setAccessToken} from "@/shared/utils/index";
import {jwtDecode} from "jwt-decode";

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const decodeJWT = (token: string) => {
    return jwtDecode(token);
};

export const refreshAccessToken = async () => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) return false;
    const formdata = new FormData();
    formdata.append("RefreshToken", refreshToken);
    const res = await fetch("https://vneshtat.com/api/auth/sign_in/auth_token", {
        method: "PATCH",
        body: formdata
    });
    const data = await res.json();

    if (data.status === "success") {
        setAccessToken(data.data.access_token);
        return true;
    } else {
        return false;
    }
};

export async function getUser() {
    const res = await fetch("https://vneshtat.com/api/user/main_info/get_user", {
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        }
    })

    if (res.ok) {
        const data = await res.json()

        if (data.status === "success") {
            return {
                name: data.data.Name,
                surname: data.data.Surname
            }
        }
    }
}

export async function getUserOnline() {
    let failures = 0;
    const maxRetries = 3;
    const body = new FormData();
    body.append("EmployeeId", localStorage.getItem("EmployeeId") || "");

    async function makeRequest() {
        const res = await fetch("https://vneshtat.com/api/user/utility/update_last_online", {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
            method: "PATCH",
            body
        });

        if (res.ok) {
            const data = await res.json();

            if (data.status === "success") {
                return true;
            } else if (data.status === "error") {
                failures++;
                if (failures >= maxRetries) {
                    return false;
                }
                await delay(5000);
                return makeRequest();
            }
        } else {
            return false;
        }
    }

    return makeRequest();
}