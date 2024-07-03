import {Dispatch, SetStateAction} from "react";
import LibCalendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import ArrowLeftImg from "@/assets/icons/arrow-left.svg?react";
import "./calendar.css";

const Calendar = ({value, setter, ...opt}: {
    value: Date | Date[] | null,
    setter: Dispatch<SetStateAction<Date | Date[] | null>>
}) => {
    const tileContent = ({_, view}) => {
        if (view === 'month') {
            return <p className="tile-text">5439</p>;
        }
        return null;
    };

    const classes = {
        dayTile: "dayTile",
        activeDay: "activeDay",
    };

    const isSameDay = (date1, date2) => {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    };

    const dateAlreadyClicked = (dates: Date | Date[] | null, date: Date) => {
        if (!Array.isArray(dates)) {
            return false;
        }
        return dates.some(d => isSameDay(d, date));
    };
    const datesExcept = (dates, date) => dates.filter(d => !isSameDay(d, date));

    const onClickDay = (date: Date) => {
        setter(dateAlreadyClicked(value, date) ? datesExcept(value, date) : [...value, date])
    };

    const tileClassName = ({date}) => {
        const isActive = dateAlreadyClicked(value, date);
        const classNames = [];

        if (isActive) {
            classNames.push(classes.activeDay);
        } else {
            classNames.push(classes.dayTile);
        }

        return classNames.join(' ');
    };

    return (
        <LibCalendar
            className={"!border-none"}
            {...(Array.isArray(value) ? {onClickDay: onClickDay, tileClassName: tileClassName} : {
                value: value,
                onChange: setter
            })}
            next2Label={null}
            next2AriaLabel={null}
            prev2Label={null}
            prevLabel={
                <button className={"controller-button"}>
                    <ArrowLeftImg/>
                </button>
            }
            nextLabel={
                <button className={"controller-button"}>
                    <ArrowLeftImg className={"rotate-180"}/>
                </button>
            }
            tileContent={tileContent}
            showNeighboringMonth={false}
            {...opt}
        />
    );
};

export {Calendar};
