import {InputHTMLAttributes} from "react";

export interface InputRangeProps extends InputHTMLAttributes<HTMLInputElement> {
    extraClass?: string
    min: number,
    max: number,
    minVal: number,
    maxVal: number,
    isTime?: boolean
    onChangeValue?: ({min, max}: {min: number, max: number}) => void
}