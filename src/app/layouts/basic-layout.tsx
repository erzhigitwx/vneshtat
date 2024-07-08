import {Sidebar} from "@/widgets/sidebar";
import {Header} from "@/widgets/header";

const BasicLayout = ({component}: {component: JSX.Element}) => {
    return (
        <div className={"flex flex-row justify-center"}>
            <div className={"h-screen py-5 px-5 flex flex-row gap-7 overflow-hidden w-full ultra:px-24"}>
                <Sidebar/>
                <div className={"w-full flex flex-col gap-5"}>
                    <Header/>
                    {component}
                </div>
            </div>
        </div>
    )
};

export default BasicLayout;