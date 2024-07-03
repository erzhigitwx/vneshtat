import {Dispatch, SetStateAction} from 'react';
import LibCalendar from 'react-calendar';
import ArrowLeftImg from '@/assets/icons/arrow-left.svg?react';
import 'react-calendar/dist/Calendar.css';
import "./calendar.css";

const Calendar = ({value, setter, ...opt}: {
    value: Date | Date[] | null,
    setter: Dispatch<SetStateAction<Date | Date[] | null>>
}) => {
    // if provide date[] it will be multiple, but if just date it will be single-selectable
    const tileContent = (tile: { view: string }) => {
        if (tile.view === 'month') {
            return <p className="tile-text">5439</p>;
        }
        return null;
    };

    const classes = {
        dayTile: "dayTile",
        activeDay: "activeDay",
    };

    const dateAlreadyClicked = (dates: Date[], date: Date): boolean => {
        return dates.some(d => d.getTime() === date.getTime());
    };

    const datesExcept = (dates: Date[], date: Date): Date[] => {
        return dates.filter(d => d.getTime() !== date.getTime());
    };

    const onClickDay = (date: Date) => {
        const valueArray = Array.isArray(value) ? value : (value ? [value] : []);
        const newDates = dateAlreadyClicked(valueArray, date)
            ? datesExcept(valueArray, date)
            : [...valueArray, date];

        setter(newDates);
    };

    const tileClassName = ({date}: { date: Date }) => {
        const valueArray = Array.isArray(value) ? value : (value ? [value] : []);
        const isActive = dateAlreadyClicked(valueArray, date);
        const classNames = [];

        if (isActive) {
            classNames.push(classes.activeDay);
        } else {
            classNames.push(classes.dayTile);
        }

        return classNames.join(' ');
    };

    return (
        // @ts-expect-error not assignable types
        <LibCalendar
            className={"!border-none"}
            {...(Array.isArray(value) ? {onClickDay, tileClassName} : {value, onChange: setter})}
            next2Label={null}
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
