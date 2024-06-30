import {JourneyDropdown} from "@/widgets/journey-operations/UI/journey-dropdown";
import TrashImg from "@/assets/icons/trash.svg?react";
import {useState} from "react";
import {Checkbox} from "@/shared/UI";
import {carriers, names, prices, railwaysFrom, services} from "../utils";

const JourneyFilter = () => {
    const [price, setPrice] = useState(prices);
    const [name, setName] = useState(names);
    const [carrier, setCarrier] = useState(carriers);
    const [railwayFrom, setRailwayFrom] = useState(railwaysFrom);
    const [service, setService] = useState(services)

    return (
        <div className={"w-full max-h-[55vh] overflow-y-auto scroll"}>
            <div className={"flex justify-between items-center"}>
                <h3>Фильтры</h3>
                <TrashImg/>
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <div className={"flex flex-col gap-2.5"}>
                <JourneyDropdown isChanged={true} title={"Стоимость"} onErase={() => console.log("erase")}>
                    asasa
                </JourneyDropdown>
                <JourneyDropdown isChanged={true} title={"Время в пути"} onErase={() => console.log("erase")}>
                    Время в пути
                </JourneyDropdown>
                <JourneyDropdown isChanged={false} title={"Время отправления"} onErase={() => console.log("erase")}>
                    asdas
                </JourneyDropdown>
                <JourneyDropdown isChanged={true} title={"Время прибытия"} onErase={() => console.log("erase")}>
                    asdas
                </JourneyDropdown>
                <JourneyDropdown isChanged={false} title={"Вокзал отправления"} onErase={() => console.log("erase")}>
                    <Checkbox items={railwayFrom} setter={setRailwayFrom}/>
                </JourneyDropdown>
                <JourneyDropdown isChanged={false} title={"Вокзал прибытия"} onErase={() => console.log("erase")}>
                    asdas
                </JourneyDropdown>
                <JourneyDropdown isChanged={true} title={"Тип поезда"} onErase={() => console.log("erase")}>
                    <Checkbox items={price} setter={setPrice}/>
                </JourneyDropdown>
                <JourneyDropdown isChanged={true} title={"Наименование"} onErase={() => console.log("erase")}>
                    <Checkbox items={name} setter={setName}/>
                </JourneyDropdown>
                <JourneyDropdown isChanged={true} title={"Услуги"} onErase={() => console.log("erase")}>
                    <Checkbox items={service} setter={setService} oneChoise={false}/>
                </JourneyDropdown>
                <JourneyDropdown isChanged={true} title={"Перевозчик"} onErase={() => console.log("erase")}>
                    <Checkbox items={carrier} setter={setCarrier}/>
                </JourneyDropdown>
            </div>
        </div>
    )
};

export {JourneyFilter};