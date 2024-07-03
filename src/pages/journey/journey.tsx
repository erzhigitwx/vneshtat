import {JourneyTickets} from "@/widgets/journey-tickets";
import {JourneyOperations} from "@/widgets/journey-operations";

const Journey = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-row justify-between items-center p-5 bg-primary rounded-[23px]"}>
                <h3 className={"text-base"}>Безымянная поездка #1</h3>
                <h3 className={"text-base"}>0000,00 ₽</h3>
            </div>
            <div className={"flex flex-row gap-4"}>
                <JourneyTickets />
                <JourneyOperations />
            </div>
        </div>
    )
};

export default Journey;