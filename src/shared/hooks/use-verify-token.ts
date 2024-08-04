import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { refreshAccessToken, decodeJWT } from "@/shared/utils/methods";
import {getAccessToken} from "@/shared/utils";

export const useVerifyToken = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const verifyToken = async () => {
            const token = getAccessToken();
            if (token) {
                const { exp } = decodeJWT(token) as {exp: number};
                const currentTime = Math.floor(Date.now() / 1000);
                const isTokenExpired = exp < currentTime;

                if (isTokenExpired) {
                    const isTokenRefreshed = await refreshAccessToken();
                    if (!isTokenRefreshed) {
                        navigate("/promo");
                    } else {
                        setIsAuthorized(true);
                    }
                } else {
                    setIsAuthorized(true);
                }
            } else {
                navigate("/promo");
            }
            setIsLoading(false);
        };

        verifyToken();

        const refreshTokenPeriodically = async () => {
            const token = getAccessToken();
            if (token) {
                const { exp } = decodeJWT(token) as {exp: number};
                const currentTime = Math.floor(Date.now() / 1000);
                const refreshTime = (exp - currentTime) * 1000 - 300000;

                setTimeout(async () => {
                    await refreshAccessToken();
                    refreshTokenPeriodically();
                }, refreshTime);
            }
        };

        refreshTokenPeriodically();
    }, [navigate, location.pathname]);

    return { isLoading, isAuthorized };
};
