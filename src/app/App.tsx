import "./styles/index.css";
import {Layout} from "@/app/config/routes/layout";
import BasicLayout from "@/app/layouts/basic-layout";
import {useLocation} from "react-router-dom";

function App() {
    const location = useLocation().pathname;

    if (["/promo", "/registration", "/login"].includes(location)) {
        return <Layout />
    }
    return <BasicLayout component={<Layout/>}/>
}

export {App}