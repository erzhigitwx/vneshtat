import React, {useCallback, useEffect, useRef, useState} from 'react';
import "./input-range.css";
import {InputRangeProps} from "./input-range.props";

const InputRange: React.FC<InputRangeProps> = ({
                                                   extraClass, min, max, onChangeValue = () => {
    }, isTime = false
                                               }: InputRangeProps) => {
    const [minVal, setMinVal] = useState<number>(min);
    const [maxVal, setMaxVal] = useState<number>(max);
    const minValRef = useRef<number>(min);
    const maxValRef = useRef<number>(max);
    const range = useRef<HTMLDivElement | null>(null);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    const formatTime = (minutes: number): string => {
        const hours = Math.floor(minutes / 60).toString().padStart(2, '0');
        const mins = (minutes % 60).toString().padStart(2, '0');
        return `${hours}:${mins}`;
    };

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

    const parseTime = (timeString: string): number => {
        const [hours, minutes] = timeString.split(':').map(part => parseInt(part, 10));
        return hours * 60 + minutes;
    };

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, maxVal, getPercent]);

    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, maxVal, getPercent]);

    useEffect(() => {
        if (isTime) {
            onChangeValue && onChangeValue({min: parseTime(formatTime(minVal)), max: parseTime(formatTime(maxVal))});
        } else {
            onChangeValue && onChangeValue({min: minVal, max: maxVal});
        }
    }, [minVal, maxVal, isTime, onChangeValue]);

    return (
        <div className={`container ${extraClass}`}>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className="thumb thumb--left"
                style={{zIndex: minVal > max - 100 ? "5" : "4"}}
            />
            <div className="thumb-indicator"
                 style={{left: getLeftValue(minVal)}}/>

            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className="thumb thumb--right"
            />
            <div className="thumb-indicator" style={{left: getLeftValue(maxVal)}}/>

            <div className="slider">
                <div className="slider__track"/>
                <div ref={range as React.MutableRefObject<HTMLDivElement>} className="slider__range"/>
                <p className="slider__left-value">{isTime ? formatTime(minVal) : minVal}</p>
                <p className="slider__right-value">{isTime ? formatTime(maxVal) : maxVal}</p>
            </div>
        </div>
    );
};

export {InputRange};
