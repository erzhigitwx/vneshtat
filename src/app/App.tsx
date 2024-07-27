import "./styles/index.css";
import {Layout} from "@/app/config/routes/layout";
import BasicLayout from "@/app/layouts/basic-layout";
import {useLocation} from "react-router-dom";
import {useVerifyToken} from "@/shared/hooks/use-verify-token";

function App() {
    const location = useLocation().pathname;
    const { isLoading, isAuthorized } = useVerifyToken();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (["/promo", "/sign-up", "/sign-in", "/try"].includes(location) && isAuthorized) {
        return null;
    }

    if (["/promo", "/sign-up", "/sign-in", "/try"].includes(location)) {
        return <Layout />;
    }

    return <BasicLayout component={<Layout />} />;
}

export {App}