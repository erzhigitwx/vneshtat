import React, {useCallback, useEffect, useRef, useState} from 'react';
import "./input-range.css";
import {InputRangeProps} from "./input-range.props";
import {formatTime, parseTime} from "@/shared/utils";

const InputRange: React.FC<InputRangeProps> = ({
                                                   extraClass, min, max, minVal, maxVal, onChangeValue = () => {
    }, isTime = false, leftElem, rightElem, isLeftFixed = false, isRightFixed = false
                                               }: InputRangeProps) => {
    const [left, setLeft] = useState<number>(minVal);
    const [right, setRight] = useState<number>(maxVal);
    const range = useRef<HTMLDivElement | null>(null);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    const getLeftValue = (val: number) => {
        const percent = getPercent(val);
        let leftValue;

        if (percent < 20) {
            leftValue = `calc(${percent}% + 5px)`;
        } else if (percent > 80) {
            leftValue = `calc(${percent}% - 15px)`;
        } else {
            leftValue = `${percent}%`;
        }

        return leftValue;
    }

    useEffect(() => {
        setLeft(minVal);
        setRight(maxVal);
    }, [minVal, maxVal]);

    useEffect(() => {
        const minPercent = getPercent(left);
        const maxPercent = getPercent(right);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [left, right, getPercent]);

    useEffect(() => {
        if (isTime) {
            onChangeValue && onChangeValue({min: parseTime(formatTime(left)), max: parseTime(formatTime(right))});
        } else {
            onChangeValue && onChangeValue({min: left, max: right});
        }
    }, [left, right, isTime]);

    return (
        <div className={`container-wrapper`}>
            <div className={`container ${extraClass}`}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={left}
                    onChange={(event) => {
                        if (!isLeftFixed) {
                            const value = Math.min(Number(event.target.value), right - 1);
                            setLeft(value);
                        }
                    }}
                    className="thumb thumb--left"
                    style={{zIndex: left > max - 100 ? "5" : "4"}}
                    disabled={isLeftFixed}
                />
                {!isLeftFixed && <div className="thumb-indicator" style={{left: getLeftValue(left)}}/>}

                <input
                    type="range"
                    min={min}
                    max={max}
                    value={right}
                    onChange={(event) => {
                        if (!isRightFixed) {
                            const value = Math.max(Number(event.target.value), left + 1);
                            setRight(value);
                        }
                    }}
                    className="thumb thumb--right"
                    disabled={isRightFixed}
                />
                {!isRightFixed && <div className="thumb-indicator" style={{left: getLeftValue(right)}}/>}

                <div className="slider">
                    <div className="slider__track"/>
                    <div ref={range as React.MutableRefObject<HTMLDivElement>} className="slider__range"/>
                </div>
            </div>
            <div className={"flex items-center justify-between"}>
                {leftElem ? leftElem : <p className="slider__left-value">{isTime ? formatTime(left) : left}</p>}
                {rightElem ? rightElem : <p className="slider__right-value">{isTime ? formatTime(right) : right}</p>}
            </div>
        </div>
    );
};

export {InputRange};
