// import {HotelItems} from "@/widgets/hotel/hotel-items/UI/hotel-items";
import {HotelOperations} from "@/widgets/hotel/hotel-operations";
import {HotelMap} from "@/widgets/hotel/hotel-map/UI/hotel-map";

const Hotel = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-row justify-between items-center p-5 bg-primary rounded-[23px]"}>
                <h3 className={"text-base"}>Новая поездка</h3>
                <h3 className={"text-base"}>0000,00 ₽</h3>
            </div>
            <div className={"flex flex-row gap-4"}>
                {/*<HotelItems />*/}
                <HotelMap />
                <HotelOperations />
            </div>
        </div>
    )
};

export default Hotel;