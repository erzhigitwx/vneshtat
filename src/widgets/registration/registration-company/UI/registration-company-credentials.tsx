import {Input} from "@/shared/UI";
import {updateCredentialsState} from "../model/registration-company.store";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/config/store";
import {Dispatch, SetStateAction} from "react";

const RegistrationCompanyCredentials = ({setHasAccount}: { setHasAccount: Dispatch<SetStateAction<boolean>> }) => {
    const {email, phone, login, password} = useSelector((state: RootState) => state.registrationCompany.credentials);
    const {isInfoReady, isCredentialsReady} = useSelector((state: RootState) => state.registrationCompany);
    const dispatch = useDispatch();

    return (
        <>
            <div className={"flex flex-col gap-2.5 mt-5"}>
                <Input
                    extraClass={"!text-lg text-center !font-medium h-[50px] rounded-[16px] border border-solid border-[#E5E7EA] !bg-primary"}
                    placeholder={"Email"}
                    value={email}
                    type={"email"}
                    onChange={e => dispatch(updateCredentialsState({
                        field: "email",
                        value: e.target.value
                    }))}
                />
                <Input
                    extraClass={"!text-lg text-center !font-medium h-[50px] rounded-[16px] border border-solid border-[#E5E7EA] !bg-primary"}
                    placeholder={"Телефон"}
                    value={phone}
                    onChange={e => dispatch(updateCredentialsState({
                        field: "phone",
                        value: e.target.value
                    }))}
                />
                <Input
                    extraClass={`!text-lg !font-medium h-[50px] text-center w-full rounded-[16px] border border-solid border-[#E5E7EA] text-blue !bg-primary first-letter-black`}
                    placeholder="Логин"
                    value={login ? `@${login}` : ""}
                    onChange={e => dispatch(updateCredentialsState({
                        field: "login",
                        value: e.target.value.startsWith('@') ? e.target.value.slice(1) : e.target.value
                    }))}
                />
                <Input
                    extraClass={"!text-lg text-center !font-medium h-[50px] rounded-[16px] border border-solid border-[#E5E7EA] !bg-primary"}
                    placeholder={"Пароль"}
                    value={password}
                    type={"password"}
                    onChange={e => dispatch(updateCredentialsState({
                        field: "password",
                        value: e.target.value
                    }))}
                />
            </div>
            <div className={"flex flex-col items-center mt-4"}>
                                 <span className={"flex items-center gap-2 w-[190px]"}>
                                 <p className={`text-xs font-medium text-[#787B86] ${password && "text-blue"}`}>6+</p>
                                 <p className={"text-xs text-[#787B86]"}>Не менее 6 символов</p>
                             </span>
                <span className={"flex items-center gap-2 w-[190px]"}>
                                     <p className={`text-xs font-medium text-[#787B86] ${password && "text-blue"}`}>Ff</p>
                                     <p className={"text-xs text-[#787B86]"}>Строчные и прописные буквы</p>
                                 </span>
                <span className={"flex items-center gap-2 w-[190px]"}>
                                <p className={`text-xs font-medium text-[#787B86] ${password && "text-blue"}`}>1#!</p>
                                <p className={"text-xs text-[#787B86]"}>Цифры и другие символы</p>
                            </span>
            </div>
            <button
                className={"transition bg-black py-4 px-9 rounded-[16px] h-[50px] flex items-center justify-center w-full mt-4 disabled:cursor-not-allowed disabled:bg-secondary"}
                disabled={!isInfoReady || !isCredentialsReady}
            >
                <h3 className={`text-lg font-medium ${isInfoReady && isCredentialsReady ? "text-primary" : "text-black"}`}>Создать
                    аккаунт</h3>
            </button>
            <button
                className={"transition border border-solid border-[#E5E7EA] bg-primary py-4 px-9 rounded-[16px] h-[50px] flex items-center justify-center w-full mt-2.5"}
                onClick={() => setHasAccount(true)}
            >
                <h3 className={`text-lg font-medium`}>Уже есть аккаунт</h3>
            </button>
        </>
    )
};

export {RegistrationCompanyCredentials};