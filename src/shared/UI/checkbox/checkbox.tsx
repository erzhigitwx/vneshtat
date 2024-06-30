import {CheckboxProps} from "./checkbox.props";
import Success from "@/assets/icons/success.svg?react";
import SuccessFilled from "@/assets/icons/success-filled.svg?react";

const Checkbox = ({items, setter, oneChoise = true}: CheckboxProps) => {
    const selectItem = (id: number) => {
        setter(prev => {
            return prev.map(item => {
                if (oneChoise) {
                    return {
                        ...item,
                        isSelected: item.id === id
                    };
                } else {
                    if (item.id === id) {
                        return {
                            ...item,
                            isSelected: !item.isSelected
                        };
                    }
                    return item;
                }
            });
        })
    }

    return (
        <div className={"flex flex-col gap-1.5"}>
            {items.map((item) => (
                <div
                    key={item.id}
                    onClick={() => selectItem(item.id)}
                    className={"flex items-center gap-1.5 py-1.5 px-2 bg-primary rounded-primary"}>
                    {item.isSelected ? <SuccessFilled className={"min-w-7 min-h-7"}/> :
                        <Success className={"min-w-7 min-h-7"}/>}
                    <p className={"text-xs"}>{item.content}</p>
                </div>
            ))}
        </div>
    )
};

export {Checkbox};