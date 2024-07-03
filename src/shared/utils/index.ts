import {Seat} from "@/shared/types";

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

export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        weekday: 'long'
    };

    const dateFormatter = new Intl.DateTimeFormat('ru-RU', options);
    const formattedDateParts = dateFormatter.formatToParts(date);

    const dayOfMonth = formattedDateParts.find(part => part.type === 'day')?.value ?? '';
    const month = formattedDateParts.find(part => part.type === 'month')?.value ?? '';

    return `${dayOfMonth} ${month}`;
};

export const getDayOfWeek  = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        weekday: 'long'
    };

    const dateFormatter = new Intl.DateTimeFormat('ru-RU', options);
    const formattedDateParts = dateFormatter.formatToParts(date);

    return formattedDateParts.find(part => part.type === 'weekday')?.value ?? '';
}