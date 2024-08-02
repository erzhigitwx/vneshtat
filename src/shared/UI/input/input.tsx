import clsx from "clsx";
import EyeImg from "@/assets/icons/eye.svg?react";
import EyeClosedImg from "@/assets/icons/eye-closed.svg?react";
import { InputProps } from "./input.props";
import {useState, useEffect, ChangeEvent} from "react";

const Input = ({ extraClass, ...rest }: InputProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [phoneValue, setPhoneValue] = useState(rest.value || '');

    useEffect(() => {
        if (rest.type === "phone") {
            let formattedValue: string = phoneValue as string;
            if (formattedValue.startsWith('7')) {
                formattedValue = '+7' + formattedValue.slice(1);
            }
            setPhoneValue(formattedValue);
        }
    }, [rest.type]);

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.startsWith('7')) {
            value = '+7' + value.slice(1);
        } else if (!value.startsWith('9')) {
            value = '';
        }
        setPhoneValue(value);
        if (rest.onChange) {
            rest.onChange({ ...e, target: { ...e.target, value } });
        }
    };

    return rest.type === "password" ? (
        <div className="relative">
            <input
                className={clsx("bg-secondary rounded-primary text-sm py-2 px-2.5 w-full", extraClass)}
                {...rest}
                type={isOpen ? "text" : "password"}
            />
            {rest.value && (
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                    {isOpen ? <EyeClosedImg className={"transition blue-fill-hover"}/> : <EyeImg className={"transition blue-fill-hover"}/>}
                </button>
            )}
        </div>
    ) : rest.type === "phone" ? (
        <input
            className={clsx("bg-secondary rounded-primary text-sm py-2 px-2.5", extraClass)}
            {...rest}
            type="text"
            value={phoneValue}
            onChange={handlePhoneChange}
        />
    ) : (
        <input
            className={clsx("bg-secondary rounded-primary text-sm py-2 px-2.5", extraClass)}
            type={rest.type || "text"}
            {...rest}
        />
    );
};

export { Input };
