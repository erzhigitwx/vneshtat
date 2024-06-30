import {Dispatch, SetStateAction} from "react";

export interface CheckboxProps {
    items: CheckboxItem[]
    setter: Dispatch<SetStateAction<CheckboxItem[]>>
    oneChoise?: boolean
}

export interface CheckboxItem {
    id: number
    content: string
    isSelected: boolean
}