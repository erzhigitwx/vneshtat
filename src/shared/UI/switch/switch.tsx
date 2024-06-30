import {SwitchProps} from "@/shared/UI/switch/switch.props";

const Switch = ({
                    extraClass,
                    firstChild,
                    secondChild,
                    isSelected,
                    selectedBg = "#fafafa",
                    px = "2.5",
                    py = "1.5",
                    setter
                }: SwitchProps) => {
    const padding = `px-${px?.slice(0, px?.length)} py-${py?.slice(0, py?.length)}`
    return (
        <div className={`flex flex-row items-center gap-2.5 bg-section p-1 rounded-primary w-fit ${extraClass}`}>
            <div
                className={`rounded-secondary cursor-pointer ${padding}`}
                style={{backgroundColor: isSelected ? selectedBg : "#eceef1"}}
                onClick={() => setter(true)}>
                {firstChild}
            </div>
            <div
                className={`rounded-secondary cursor-pointer ${padding}`}
                style={{backgroundColor: !isSelected ? selectedBg : "#eceef1"}}
                onClick={() => setter(false)}>
                {secondChild}
            </div>
        </div>
    )
};

export {Switch};