export interface CheckboxProps {
    items: CheckboxItem[]
    onChange: any
}

export interface CheckboxItem {
    id: number
    content: string
    isSelected: boolean
}