import {TransferContent} from "@/widgets/transfer/transfer-content";
import {TransferOperations} from "@/widgets/transfer/transfer-operations";

const Transfer = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-row justify-between items-center p-5 bg-primary rounded-[23px]"}>
                <h3 className={"text-base"}>Новая поездка</h3>
                <h3 className={"text-base"}>0000,00 ₽</h3>
            </div>
            <div className={"flex flex-row gap-4"}>
                <TransferContent />
                <TransferOperations />
            </div>
        </div>
    )
};

export default Transfer;