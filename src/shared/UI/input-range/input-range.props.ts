import {InputHTMLAttributes} from "react";
import {Range} from "@/shared/types";

export interface InputRangeProps extends InputHTMLAttributes<HTMLInputElement> {
    extraClass?: string
    min: number,
    max: number,
    minVal: number,
    maxVal: number,
    isTime?: boolean
    onChangeValue?: ({min, max}: Range) => void
}