import {Dispatch, HTMLAttributes, SetStateAction} from "react";

export interface TogglerProps extends HTMLAttributes<HTMLDivElement>{
    isSelected: boolean,
    setter: Dispatch<SetStateAction<boolean>>
    extraClass?: string,
    size?: number[]
}