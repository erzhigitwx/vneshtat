import {InputHTMLAttributes, ReactNode} from "react";
import {Range} from "@/shared/types";

export interface InputRangeProps extends InputHTMLAttributes<HTMLInputElement> {
    extraClass?: string
    min: number,
    max: number,
    minVal: number,
    maxVal: number,
    isLeftFixed?: boolean,
    isRightFixed?: boolean,
    leftElem?: ReactNode,
    rightElem?: ReactNode,
    isTime?: boolean
    onChangeValue?: ({min, max}: Range) => void
}