import {Range} from "@/shared/types";
import {CheckboxItem} from "@/shared/UI/checkbox/checkbox.props";

export const radiusRange: Range = {min: 0, max: 10000}

export const priceRanges: Range = {min: 10000, max: 167450}

export const ratings: Range = {min: 0, max: 100};

export const starsItems: CheckboxItem[] = [
    {content: "★★★★★", isSelected: true, id: 1},
    {content: "★★★★", isSelected: false, id: 2},
    {content: "★★★", isSelected: false, id: 3},
    {content: "★★", isSelected: false, id: 4},
    {content: "★", isSelected: false, id: 5},
    {content: "Без звёзд", isSelected: false, id: 6},
]

export const placingTypes: CheckboxItem[] = [
    {content: "Отель", isSelected: true, id: 1},
    {content: "Хостел", isSelected: false, id: 2},
    {content: "Мини-отель", isSelected: false, id: 3},
    {content: "Гостевой дом", isSelected: false, id: 4},
    {content: "Апартаменты", isSelected: false, id: 5},
    {content: "Курортный отель", isSelected: false, id: 6},
    {content: "Санаторий", isSelected: false, id: 7},
]

export const nutritionTypes: CheckboxItem[] = [
    {content: "Питание не включено", isSelected: true, id: 1},
    {content: "Завтрак", isSelected: false, id: 2},
    {content: "Трёхразовое питание", isSelected: false, id: 3},
    {content: "Двухразовое питание", isSelected: false, id: 4},
]

export const facilities: CheckboxItem[] = [
    {content: "Ванная в номере", isSelected: true, id: 1},
    {content: "Бесплатный Wi-Fi", isSelected: false, id: 2},
    {content: "Спорт", isSelected: false, id: 3},
    {content: "Бар/ресторан", isSelected: false, id: 4},
    {content: "Парковка", isSelected: false, id: 5},
    {content: "Бассейн", isSelected: false, id: 6},
    {content: "Спа", isSelected: false, id: 7},
]

export const bedType: CheckboxItem[] = [
    {content: "Неважно", isSelected: true, id: 1},
    {content: "Одна кровать", isSelected: false, id: 2},
    {content: "Раздельные кровати", isSelected: false, id: 3},
]

export const paymentConditions: CheckboxItem[] = [
    {content: "Оплата сейчас", isSelected: true, id: 1},
    {content: "Оплата в отеле", isSelected: false, id: 2},
]

export const travelPolitics: CheckboxItem[] = [
    {content: "Не задана", isSelected: true, id: 1},
    {content: "Для топ-менеджеров", isSelected: false, id: 2},
    {content: "Для сотрудников", isSelected: false, id: 3},
    {content: "Лимит", isSelected: false, id: 4},
]