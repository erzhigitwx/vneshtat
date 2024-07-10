import {RegistrationCompany} from "@/widgets/registration/registration-company";
import VneshtatImg from "@/assets/icons/vneshtat.svg?react";

const Registration = () => {
    return (
        <div className={"px-[100px] h-[100vh]"}>
            <header className={"py-[30px] w-full flex justify-center"}>
                <VneshtatImg className={"grey-fill"}/>
            </header>
            <RegistrationCompany/>
            <footer className={"flex items-center justify-between"}>
                <p className={"text-base text-[#787B86]"}>Внештат - часть за пределами целого</p>
                <span className={"flex gap-4"}>
                    <p className={"text-base text-[#787B86]"}>Ru</p>
                    <p className={"text-base text-[#787B86]"}>Справка и поддержка</p>
                </span>
            </footer>
        </div>
    )
};

export default Registration;