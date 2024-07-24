import {InputHTMLAttributes} from "react";

export interface InputDateProps extends InputHTMLAttributes<HTMLInputElement>{
    inputValue: Date | Date[] | null
    setter: any
    calendarOpt?: any
    placeholder?: string
    extraClass?: string
}