import {TogglerProps} from "@/shared/UI/toggler/toggler.props";

const Toggler = ({extraClass, isSelected, setter, size = [42, 25]}: TogglerProps) => {
    return (
        <div
            onClick={() => setter(prev => !prev)}
            className={`
                p-1 min-w-10 rounded-full flex items-center transition-all duration-400 cursor-pointer
                ${isSelected ? 'bg-[#9761ff] justify-end' : 'bg-[#dce0e5] justify-start'}
                ${extraClass}
            `}
            style={{
                width: size && size[0] + "px",
                height: size && size[1] + "px"
            }}
        >
            <div className="w-[50%] h-full rounded-full bg-primary"/>
        </div>
    )
};

export {Toggler};