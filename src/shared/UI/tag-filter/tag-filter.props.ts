import {Dispatch, SetStateAction} from "react";

export interface TagFilterProps {
    tags: Tag,
    setter: Dispatch<SetStateAction<Tag>>
    extraClass?: string
}

export interface Tag {
    tags: string[],
    selectedTags: string[]
}