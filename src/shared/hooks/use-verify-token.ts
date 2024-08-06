import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { refreshAccessToken, decodeJWT } from "@/shared/utils/methods";
import { getAccessToken, getRefreshToken } from "@/shared/utils";

export const useVerifyToken = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let refreshTokenTimeout: any = null;

        const verifyToken = async () => {
            const token = getAccessToken();
            if (token) {
                const { exp } = decodeJWT(token) as { exp: number };
                const currentTime = Math.floor(Date.now() / 1000);
                const isTokenExpired = exp < currentTime;

                if (isTokenExpired) {
                    const isTokenRefreshed = await refreshAccessToken();
                    if (!isTokenRefreshed) {
                        setIsAuthorized(false);
                        navigate("/promo");
                    } else {
                        setIsAuthorized(true);
                    }
                } else {
                    setIsAuthorized(true);
                    scheduleTokenRefresh();
                }
            } else {
                if (getRefreshToken()) {
                    const isTokenRefreshed = await refreshAccessToken();
                    if (isTokenRefreshed) {
                        setIsAuthorized(true);
                        scheduleTokenRefresh();
                    } else {
                        setIsAuthorized(false);
                        navigate("/promo");
                    }
                } else {
                    setIsAuthorized(false);
                    navigate("/promo");
                }
            }
            setIsLoading(false);
        };

        const scheduleTokenRefresh = () => {
            if (refreshTokenTimeout) {
                clearTimeout(refreshTokenTimeout);
            }

            const refreshInterval = 273000;

            refreshTokenTimeout = setTimeout(async () => {
                const isTokenRefreshed = await refreshAccessToken();
                if (isTokenRefreshed) {
                    scheduleTokenRefresh();
                }
            }, refreshInterval);
        };

        verifyToken();

        return () => {
            if (refreshTokenTimeout) {
                clearTimeout(refreshTokenTimeout);
            }
        };
    }, []);

    return { isLoading, isAuthorized };
};
