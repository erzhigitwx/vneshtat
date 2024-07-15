import {CheckboxProps} from "./checkbox.props";
import SuccessImg from "@/assets/icons/success.svg?react";
import SuccessFilledImg from "@/assets/icons/success-filled.svg?react";

const Checkbox = ({items, onChange, childClass}: CheckboxProps) => {
    return (
        <div className={"flex flex-col gap-1.5"}>
            {items.map((item) => (
                <div
                    key={item.id}
                    onClick={() => onChange(item.id)}
                    className={`flex items-center gap-1.5 py-1.5 px-2 bg-primary rounded-primary cursor-pointer ${childClass}`}>
                    {item.isSelected ? <SuccessFilledImg className={"min-w-7 min-h-7"}/> :
                        <SuccessImg className={"min-w-7 min-h-7"}/>}
                    <p className={"text-xs"}>{item.content}</p>
                </div>
            ))}
        </div>
    )
};

export {Checkbox};