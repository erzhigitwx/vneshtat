import {Dispatch, ReactNode, SetStateAction} from "react";

export interface SwitchProps {
    firstChild: ReactNode
    secondChild: ReactNode
    isSelected: boolean,
    py?: string,
    px?: string,
    selectedBg?: string,
    extraClass?: string,
    setter: Dispatch<SetStateAction<boolean>>
}