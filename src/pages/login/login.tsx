import {LoginUser} from "@/widgets/login/login-user";

const Login = () => {
    return (
        <div className={"px-[100px] h-[100vh]"}>
            <LoginUser />
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

export default Login;