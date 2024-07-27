import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { checkAccessToken } from "@/shared/utils";

export const useVerifyToken = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const verifyToken = async () => {
            const isTokenValid = await checkAccessToken();
            if (!isTokenValid) {
                if (!["/sign-in", "/sign-up", "/promo", "/try"].includes(location.pathname)) {
                    navigate("/sign-in");
                }
            } else {
                if (["/sign-in", "/sign-up", "/promo", "/try"].includes(location.pathname)) {
                    navigate("/");
                }
                setIsAuthorized(true);
            }
            setIsLoading(false);
        };

        verifyToken();
    }, [navigate, location.pathname]);

    return { isLoading, isAuthorized };
};
