import {HTMLAttributes} from "react";

export interface InputDateProps extends HTMLAttributes<HTMLInputElement>{
    inputValue: Date | Date[] | null
    setter: any
    calendarOpt?: any
    placeholder?: string
    extraClass?: string
}