import {Seat} from "@/shared/types";
import {CheckboxItem} from "@/shared/UI/checkbox/checkbox.props";

export const seatsMock: Seat[][] = [[{
    order: 45,
    isBooked: true,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "cheap"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}], [{
    order: 45,
    isBooked: false,
    state: "free"
}, {
    order: 45,
    isBooked: false,
    state: "free"
}],]

export const formatDate = (date: Date, shortForm: boolean = false): string => {
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: shortForm ? "short" : "long",
    };

    const dateFormatter = new Intl.DateTimeFormat('ru-RU', options);
    const formattedDateParts = dateFormatter.formatToParts(date);

    const dayOfMonth = formattedDateParts.find(part => part.type === 'day')?.value ?? '';
    const month = formattedDateParts.find(part => part.type === 'month')?.value ?? '';

    return `${dayOfMonth} ${shortForm ? month.slice(0, month.length - 1) : month}`;
};

export const getDayOfWeek = (date: Date, shortForm: boolean = false): string => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: shortForm ? "short" : "long",
    };

    const dateFormatter = new Intl.DateTimeFormat('ru-RU', options);
    const formattedDateParts = dateFormatter.formatToParts(date);

    return formattedDateParts.find(part => part.type === 'weekday')?.value ?? '';
}

export const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60).toString().padStart(2, '0');
    const mins = (minutes % 60).toString().padStart(2, '0');
    return `${hours}:${mins}`;
};

export const parseTime = (timeString: string): number => {
    const [hours, minutes] = timeString.split(':').map(part => parseInt(part, 10));
    return hours * 60 + minutes;
};

export const checkIfChanged = (original: any, current: any) => {
    return JSON.stringify(original) !== JSON.stringify(current);
};

export const changeCheckbox = (items: CheckboxItem[], id: number, oneChoise: boolean) => {
    const updatedItems = items.map((item: CheckboxItem) => {
        if (oneChoise) {
            return {
                ...item,
                isSelected: item.id === id
            };
        } else {
            if (item.id === id) {
                return {
                    ...item,
                    isSelected: !item.isSelected
                };
            }
            return item;
        }
    });

    return updatedItems;
};