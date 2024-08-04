interface Tariff {
    class: string,
    direction: 1 | 2,
    id: number
}

export const mockTariff: Tariff[] = [{
    class: "Стандарт",
    direction: 1,
    id: 1
}, {
    class: "Стандарт",
    direction: 2,
    id: 2
}, {
    class: "Бизнес",
    direction: 1,
    id: 3
}, {
    class: "Бизнес",
    direction: 2,
    id: 4
}]