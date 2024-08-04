import "./styles/index.css";
import {Layout} from "@/app/config/routes/layout";
import BasicLayout from "@/app/layouts/basic-layout";
import {useLocation} from "react-router-dom";
import {useVerifyToken} from "@/shared/hooks/use-verify-token";
import {useEffect} from "react";
import {getUser, getUserOnline} from "@/shared/utils/methods";
import {useDispatch} from "react-redux";
import {setIsOnline, setUser} from "@/app/model/user.store";

function App() {
    const location = useLocation().pathname;
    const dispatch = useDispatch();
    const {isLoading, isAuthorized} = useVerifyToken();

    useEffect(() => {
        const setUserData = async () => {
            const user = await getUser();
            dispatch(setUser(user));
        }
        setUserData()

        const setUserOnline = async () => {
            const isOnline = await getUserOnline();
            dispatch(setIsOnline(isOnline));
        }
        setUserOnline();
        setInterval(() => {
            setUserOnline();
        }, 60 * 1000)
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (["/promo", "/sign-up", "/sign-in", "/try"].includes(location) && isAuthorized) {
        return null;
    }

    if (["/promo", "/sign-up", "/sign-in", "/try"].includes(location)) {
        return <Layout/>;
    }

    return <BasicLayout component={<Layout/>}/>;
}

export {App}