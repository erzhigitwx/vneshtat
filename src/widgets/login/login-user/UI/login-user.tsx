import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/config/store";
import {Input, Switch} from "@/shared/UI";
import LogoIdImg from "@/assets/icons/logo-id.svg?react";
import AlphaImg from "@/assets/icons/alpha.svg?react";
import BetaSaratovImg from "@/assets/icons/beta-saratov.svg?react";
import SuccessImg from "@/assets/icons/success-filled.svg?react";
import ArrowImg from "@/assets/icons/arrow-long.svg?react";
import {useState} from "react";
import {updateLoginState} from "../model/login.store";

const LoginUser = () => {
    const {withPhone, sms, phone, login, isLoginReady} = useSelector((state: RootState) => state.login)
    const [isLoginClicked, setIsLoginClicked] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className={"h-[calc(100vh-54px)] flex justify-center items-center"}>
            {isLoginClicked ? (
                <div className={"flex flex-col gap-6"}>
                    <h1 className={"text-[30px] text-center"}>В какую компанию войти?</h1>
                    <div className={"flex gap-4 relative"}>
                        <button className={"absolute right-[670px] top-2.5"} onClick={() => setIsLoginClicked(false)}>
                            <ArrowImg/>
                        </button>
                        <div className={"bg-primary p-6 rounded-[35px] w-[320px]"}>
                            <div className={"flex justify-center items-center"}>
                                <AlphaImg/>
                            </div>
                            <div
                                className={"flex items-center justify-between pl-6 py-4 pr-4 mt-5 h-[50px] rounded-[16px] border border-solid border-[#E5E7EA]"}>
                                <h2 className={"text-lg text-[#9B9FAD]"}>Альфа Самара</h2>
                                <SuccessImg className={"min-w-6 min-h-6 blue-fill"}/>
                            </div>
                            <button
                                className={"w-full flex justify-center items-center py-3 mt-2.5 h-[50px] rounded-primary bg-[#292933]"}
                            >
                                <p className={`text-lg font-medium text-primary`}>Войти</p>
                            </button>
                        </div>
                        <div className={"bg-primary p-6 rounded-[35px] w-[320px]"}>
                            <div className={"flex justify-center items-center"}>
                                <BetaSaratovImg/>
                            </div>
                            <div
                                className={"flex items-center justify-between pl-6 py-4 pr-4 mt-5 h-[50px] rounded-[16px] border border-solid border-[#E5E7EA]"}>
                                <h2 className={"text-lg text-[#9B9FAD]"}>ПАО Бета Саратов</h2>
                                <SuccessImg className={"min-w-6 min-h-6 blue-fill"}/>
                            </div>
                            <button
                                className={"w-full flex justify-center items-center py-3 mt-2.5 h-[50px] rounded-primary bg-[#292933]"}
                            >
                                <p className={`text-lg font-medium text-primary`}>Войти</p>
                            </button>
                        </div>
                    </div>
                    <p className={"text-base text-center font-medium text-[#9B9FAD]"}>Вы всегда можете переключить
                        компанию в
                        Личном кабинете</p>
                </div>
            ) : (
                <div className={"w-[320px] flex flex-col gap-6"}>
                    <h1 className={"text-[30px] text-center"}>Войти в аккаунт</h1>
                    <div className={"flex flex-col bg-primary gap-5 p-6 rounded-[35px]"}>
                        <div className={"flex justify-center"}>
                            <LogoIdImg/>
                        </div>
                        <div className={"flex flex-col gap-2.5"}>
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
                                setter={(value) => dispatch(updateLoginState({
                                    field: "withPhone",
                                    value: value as boolean
                                }))}
                            />
                            {withPhone ? (
                                <Input
                                    extraClass={"!text-lg !font-medium h-[50px] rounded-[16px] text-center border border-solid border-[#E5E7EA] !bg-primary"}
                                    placeholder={"+7 (___) ___ - __ -__"}
                                    value={phone}
                                    onChange={e => dispatch(updateLoginState({
                                        field: "phone",
                                        value: e.target.value
                                    }))}
                                />
                            ) : (
                                <Input
                                    extraClass={`!text-lg !font-medium h-[50px] text-center w-full rounded-[16px] border border-solid border-[#E5E7EA] text-blue !bg-primary first-letter-black`}
                                    placeholder="Логин"
                                    value={login ? `@${login}` : ""}
                                    onChange={e => dispatch(updateLoginState({
                                        field: "login",
                                        value: e.target.value.startsWith('@') ? e.target.value.slice(1) : e.target.value
                                    }))}
                                />
                            )}
                            <Input
                                extraClass={"!text-lg !font-medium text-blue text-center h-[50px] rounded-[16px] border border-solid border-[#E5E7EA] !bg-primary"}
                                placeholder={"Введите код из СМС"}
                                value={sms}
                                onChange={e => dispatch(updateLoginState({
                                    field: "sms",
                                    value: e.target.value
                                }))}
                            />
                            <button
                                className={"w-full flex justify-center items-center py-3 h-[50px] rounded-primary bg-[#292933] disabled:bg-secondary"}
                                disabled={!!sms}>
                                <p className={`text-lg font-medium text-primary ${sms && "!text-[#9B9FAD]"}`}>{sms ? "Отправить повторно 0:59" : "Получить код"}</p>
                            </button>
                            {phone ? (
                                <p className={"text-center text-[15px] text-[#FF64A3] px-7"}>Аккаунта, привязанного к
                                    этому номеру не найдено</p>
                            ) : null}
                            <button
                                className={"w-full flex justify-center items-center py-3 h-[50px] rounded-primary bg-[#292933] disabled:bg-secondary"}
                                disabled={!isLoginReady}
                                onClick={() => setIsLoginClicked(true)}
                            >
                                <p className={`text-lg font-medium text-primary ${!isLoginReady && "!text-[#9B9FAD]"}`}>Войти</p>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};

export {LoginUser};