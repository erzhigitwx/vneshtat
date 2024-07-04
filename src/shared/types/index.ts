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