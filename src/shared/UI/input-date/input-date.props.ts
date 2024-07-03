import {Dispatch, HTMLAttributes, SetStateAction} from "react";

export interface InputDateProps extends HTMLAttributes<HTMLInputElement>{
    inputValue: Date | Date[] | null
    setter: Dispatch<SetStateAction<Date | Date[] | null>>
    calendarOpt?: any
    placeholder?: string
    extraClass?: string
}