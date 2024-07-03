import "./styles/index.css";
import {Layout} from "@/app/config/routes/layout";
import {Sidebar} from "@/widgets/sidebar";
import {Header} from "@/widgets/header";

function App() {
    return (
        <div className={"flex flex-row justify-center"}>
            <div className={"h-screen py-5 px-24 flex flex-row gap-7 overflow-hidden w-full"}>
                <Sidebar/>
                <div className={"w-full flex flex-col gap-5"}>
                    <Header/>
                    <Layout/>
                </div>
            </div>
        </div>
    )
}

export {App}