import {getAccessToken, getRefreshToken, setAccessToken} from "@/shared/utils/index";

export const checkAccessToken = async () => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) return false;
    const formdata = new FormData();
    formdata.append("RefreshToken", refreshToken);
    const res = await fetch("https://vneshtat.com/api/auth/sign_in/auth_token", {
        method: "PATCH",
        body: formdata,
        redirect: "follow"
    });
    const data = await res.json();

    if (data.message === "token_has_been_refreshed") {
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