import {Input, Switch} from "@/shared/UI";
import {updateAccountState} from "../model/registration-company.store";
import {Dispatch, SetStateAction} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/config/store";

const RegistrationCompanyHasAccount = ({isLoginClicked, setIsLoginClicked, setHasAccount}: {
    isLoginClicked: boolean,
    setIsLoginClicked: Dispatch<SetStateAction<boolean>>,
    setHasAccount: Dispatch<SetStateAction<boolean>>,
}) => {
    const {
        isInfoReady,
        isAccountReady
    } = useSelector((state: RootState) => state.registrationCompany);
    const {phone, login, sms, withPhone} = useSelector((state: RootState) => state.registrationCompany.account);
    const dispatch = useDispatch();

    return isLoginClicked ? (
        <div className={"h-full flex flex-col justify-between"}>
            <div className={"h-full flex flex-col gap-2.5 mt-5"}>
                <Input
                    extraClass={"!text-lg !font-medium text-center h-[50px] rounded-[16px] border border-solid border-[#E5E7EA] !bg-primary"}
                    placeholder={"+7 (___) ___ - __ -__"}
                    value={phone}
                />
                <Input
                    extraClass={`!text-lg !font-medium h-[50px] text-center w-full rounded-[16px] border border-solid border-[#E5E7EA] text-blue !bg-primary first-letter-black`}
                    placeholder="Логин"
                    value={login ? `@${login}` : ""}
                />
                <button
                    className={"w-full flex justify-center items-center py-3 h-[50px] rounded-primary bg-[#292933] disabled:bg-secondary"}
                    disabled={!isInfoReady}
                >
                    <p className={`text-lg font-medium text-primary ${!isInfoReady && "!text-[#9B9FAD]"}`}>Подключить
                        к компании</p>
                </button>
                <p className={"text-[15px] font-medium text-[#9B9FAD] text-center px-6 my-2.5"}>{isInfoReady ? "Убедитесь, что @id принадлежит вам" : "Для подключения заполните базовые данные в левом окне"}</p>
            </div>
            <button
                className={"transition border border-solid border-[#E5E7EA] bg-primary py-4 px-9 rounded-[16px] h-[50px] flex items-center justify-center w-full"}
                onClick={() => setIsLoginClicked(false)}
            >
                <h3 className={`text-lg font-medium`}>Сменить аккаунт</h3>
            </button>
        </div>
    ) : (
        <div className={"flex flex-col gap-2.5 mt-5"}>
            <Switch
                extraClass={"w-full h-[50px] !bg-[#FAFAFA] border border-solid border-[#E5E7EA]"}
                extraChildClass={"py-2.5 h-full w-[50%]"}
                selectedBg={"#ECEEF1"}
                unselectedBg={"#FAFAFA"}
                firstChild={<p
                    className={`font-medium text-base ${withPhone ? "text-[#121212]" : "text-[#9B9FAD]"}`}>Телефон</p>}
                secondChild={<p
                    className={`font-medium text-base ${withPhone ? "text-[#9B9FAD]" : "text-[#121212]"}`}>Логин</p>}
                isSelected={withPhone}
                setter={(value) => dispatch(updateAccountState({field: "withPhone", value: value as boolean}))}
            />
            {withPhone ? (
                <Input
                    extraClass={"!text-lg !font-medium h-[50px] text-center rounded-[16px] border border-solid border-[#E5E7EA] !bg-primary"}
                    placeholder={"+7 (___) ___ - __ -__"}
                    value={phone}
                    onChange={e => dispatch(updateAccountState({
                        field: "phone",
                        value: e.target.value
                    }))}
                />
            ) : (
                <Input
                    extraClass={`!text-lg !font-medium h-[50px] text-center w-full rounded-[16px] border border-solid border-[#E5E7EA] text-blue !bg-primary first-letter-black`}
                    placeholder="Логин"
                    value={login ? `@${login}` : ""}
                    onChange={e => dispatch(updateAccountState({
                        field: "login",
                        value: e.target.value.startsWith('@') ? e.target.value.slice(1) : e.target.value
                    }))}
                />
            )}
            <Input
                extraClass={"!text-lg !font-medium text-blue h-[50px] text-center rounded-[16px] border border-solid border-[#E5E7EA] !bg-primary"}
                placeholder={"Введите код из СМС"}
                value={sms}
                onChange={e => dispatch(updateAccountState({
                    field: "sms",
                    value: e.target.value
                }))}
            />
            <button
                className={"w-full flex justify-center items-center py-3 h-[50px] rounded-primary bg-[#292933] disabled:bg-secondary"}
                disabled={!!sms}>
                <p className={`text-lg font-medium text-primary ${sms && "!text-[#9B9FAD]"}`}>{sms ? "Отправить повторно 0:59" : "Получить код"}</p>
            </button>
            <button
                className={"w-full flex justify-center items-center py-3 h-[50px] rounded-primary bg-[#292933] disabled:bg-secondary"}
                disabled={!isAccountReady}
                onClick={() => setIsLoginClicked(true)}
            >
                <p className={`text-lg font-medium text-primary ${!isAccountReady && "!text-[#9B9FAD]"}`}>Войти</p>
            </button>
            <p className={"text-[15px] font-medium text-[#9B9FAD] text-center my-2.5"}>Далее вам
                будет предложено подключить ID к компании</p>
            <button
                className={"transition border border-solid border-[#E5E7EA] bg-primary py-4 px-9 rounded-[16px] h-[50px] flex items-center justify-center w-full"}
                onClick={() => setHasAccount(false)}
            >
                <h3 className={`text-lg font-medium`}>Создать аккаунт</h3>
            </button>
        </div>
    )
};

export {RegistrationCompanyHasAccount};