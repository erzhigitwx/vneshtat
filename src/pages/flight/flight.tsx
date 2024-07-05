import {FlightTickets} from "@/widgets/flight/flight-tickets";
import {FlightOperations} from "@/widgets/flight/flight-operations";

const Flight = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-row justify-between items-center p-5 bg-primary rounded-[23px]"}>
                <h3 className={"text-base"}>Безымянный полет #1</h3>
                <h3 className={"text-base"}>0000,00 ₽</h3>
            </div>
            <div className={"flex flex-row gap-4"}>
                <FlightTickets/>
                <FlightOperations/>
            </div>
        </div>
    )
};

export default Flight;