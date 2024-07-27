import CircleImg from "@/assets/icons/red-circle.svg?react";

const CountdownCircle = ({countdown, onCancel, extraClass}: {
    countdown: number,
    onCancel: any,
    extraClass?: string
}) => {
    const circumference = 2 * Math.PI * 8;

    return (
        <button onClick={onCancel} className={`min-w-5 min-h-5 relative flex justify-center items-center ${extraClass}`}>
            <p className="text-xs text-[#FF64A3]">{countdown}</p>
            <CircleImg
                className="absolute min-h-5 min-w-5"
                style={{
                    strokeDasharray: `${circumference}`,
                    strokeDashoffset: `${circumference - (circumference * (countdown - 1)) / 4}`,
                    transition: "stroke-dashoffset 1s linear",
                }}
            />
        </button>
    );
};

export {CountdownCircle};