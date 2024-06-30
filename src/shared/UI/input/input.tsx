import clsx from "clsx";
import {InputProps} from "./input.props";

const Input = ({extraClass, ...rest}: InputProps) => {
    return (
        <input className={clsx("bg-secondary rounded-primary text-sm py-2 px-2.5", extraClass)} type="text" {...rest}/>
    )
};

export {Input};