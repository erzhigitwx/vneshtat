export type ActiveOperation = "filter" | "decor" | "route" | "passengers" | "radar" | "add"

export type SeatState = "cheap" | "irrevocable" | "free" | "selected"

export interface Seat {
    order: number,
    isBooked: boolean,
    state: SeatState
}
export interface Range {
    max: number,
    min: number
}

export interface Passenger {
    id: number,
    name: string,
    surname: string,
    password: string,
    internationalPw: string,
    deleteCountdown: null | number
}

export interface TicketOption {
    id: number,
    title: string,
    count: number,
    fromPrice: string
    isSelected: boolean
}