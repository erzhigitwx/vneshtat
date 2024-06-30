import "./styles/index.css";
import {Layout} from "@/app/config/routes/layout";
import {Sidebar} from "@/widgets/sidebar";
import {Header} from "@/widgets/header";

function App() {
    return (
        <div className={"h-[100vh] bg-section px-24 py-5 flex flex-row gap-7"}>
            <Sidebar/>
            <div className={"w-full flex flex-col gap-5"}>
                <Header/>
                <Layout/>
            </div>
        </div>
    )
}

export {App}