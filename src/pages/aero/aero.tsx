import {AeroContent} from "@/widgets/aero/aero-content";
import {AeroOperations} from "@/widgets/aero/aero-operations";
import {useState} from "react";

const Aero = () => {
    const [selectedTariffId, setSelectedTariffId] = useState<number | null>(null);

    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-row justify-between items-center p-5 bg-primary rounded-[23px]"}>
                <h3 className={"text-base"}>Безымянный полет #1</h3>
                <h3 className={"text-base"}>0000,00 ₽</h3>
            </div>
            <div className={"flex flex-row gap-4"}>
                <AeroContent selectedTariffId={selectedTariffId} setSelectedTariffId={setSelectedTariffId}/>
                <AeroOperations selectedTariffId={selectedTariffId}/>
            </div>
        </div>
    )
};

export default Aero;