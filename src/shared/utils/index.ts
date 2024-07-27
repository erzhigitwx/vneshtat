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

export const setAccessToken = (token: string) => {
    localStorage.setItem('AccessToken', token);
};

export const getAccessToken = () => {
    return localStorage.getItem('AccessToken');
};

export const removeAccessToken = () => {
    localStorage.removeItem('AccessToken');
};

export const setRefreshToken = (token: string) => {
    localStorage.setItem('RefreshToken', token);
};

export const getRefreshToken = () => {
    return localStorage.getItem('RefreshToken');
};

export const removeRefreshToken = () => {
    localStorage.removeItem('RefreshToken');
};

export const checkAccessToken = async () => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();

    if (accessToken) {
        return true;
    } else if (refreshToken) {
        try {
            const formdata = new FormData();
            formdata.append("RefreshToken", refreshToken);

            const res = await fetch("https://vneshtat.com/api/auth/sign_in/auth_token", {
                method: "PATCH",
                body: formdata,
                redirect: "follow"
            });

            console.log(res)

            const data = await res.json();

            if (data.status === "success" && data.data) {
                setAccessToken(data.data.access_token);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    } else {
        return false;
    }
};

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

export const handleScrollToTop = (ref: any) => {
    if (ref.current) {
        ref.current.scrollTo({top: 0, behavior: 'smooth'});
    }
};

export const debounce = <T extends (...args: any[]) => any>(
    callback: T,
    waitFor: number
) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>): ReturnType<T> => {
        let result: any;
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
            result = callback(...args);
        }, waitFor);
        return result;
    };
};

export const getDayOfWeekMock = (day: number, month: string, year: number): string => {
    const monthMap: { [key: string]: string } = {
        "Январь": "January",
        "Февраль": "February",
        "Март": "March",
        "Апрель": "April",
        "Май": "May",
        "Июнь": "June",
        "Июль": "July",
        "Август": "August",
        "Сентябрь": "September",
        "Октябрь": "October",
        "Ноябрь": "November",
        "Декабрь": "December"
    };

    const date = new Date(`${monthMap[month]} ${day}, ${year}`);
    const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    return daysOfWeek[date.getDay()];
};