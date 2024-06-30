import clsx from 'clsx';
import CrossImg from "@/assets/icons/cross.svg?react";
import {TagFilterProps} from './tag-filter.props';

const TagFilter = ({extraClass, tags, setter, ...rest}: TagFilterProps) => {
    const addTag = (tagToAdd: string) => {
        if (!tags.selectedTags.includes(tagToAdd)) {
            const updatedTags = {
                tags: tags.tags.filter(tag => tag !== tagToAdd),
                selectedTags: [...tags.selectedTags, tagToAdd]
            };
            setter(updatedTags);
        }
    };

    const removeTag = (tagToRemove: string) => {
        const updatedTags = {
            tags: [...tags.tags, tagToRemove],
            selectedTags: tags.selectedTags.filter(tag => tag !== tagToRemove)
        };
        setter(updatedTags);
    };

    return (
        <div className={clsx("flex gap-2.5", extraClass)} {...rest}>
            <div className="flex gap-2.5">
                {tags.selectedTags.map((tag, index) => (
                    <div
                        key={index}
                        className="flex items-center py-2 px-2.5 rounded-primary bg-black cursor-pointer"
                        onClick={() => removeTag(tag)}
                    >
                        <CrossImg className={"w-5 h-5"}/>
                        <p className={"text-sm text-primary whitespace-nowrap"}>{tag}</p>
                    </div>
                ))}
            </div>
            <div className="flex gap-2.5">
                {tags.tags.map((tag, index) => (
                    <div
                        key={index}
                        className={"border border-solid border-[#e5e7ea] py-2 px-2.5 rounded-primary cursor-pointer"}
                        onClick={() => addTag(tag)}
                    >
                        <p className={"text-sm whitespace-nowrap"}>{tag}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export {TagFilter};

