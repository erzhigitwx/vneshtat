const timetable = [
    {
        departureStation: 'Курск',
        arrivalTime: '17:28, 26.01.2024',
        stopDuration: '0 мин',
        departureTime: '16:32, 26.01.2024'
    },
    {
        departureStation: 'Орел',
        arrivalTime: '17:28, 26.01.2024',
        stopDuration: '2 мин',
        departureTime: '16:32, 26.01.2024'
    }, {
        departureStation: 'Курск',
        arrivalTime: '17:28, 26.01.2024',
        stopDuration: '0 мин',
        departureTime: '16:32, 26.01.2024'
    },
    {
        departureStation: 'Орел',
        arrivalTime: '17:28, 26.01.2024',
        stopDuration: '2 мин',
        departureTime: '16:32, 26.01.2024'
    }, {
        departureStation: 'Курск',
        arrivalTime: '17:28, 26.01.2024',
        stopDuration: '0 мин',
        departureTime: '16:32, 26.01.2024'
    },
    {
        departureStation: 'Орел',
        arrivalTime: '17:28, 26.01.2024',
        stopDuration: '2 мин',
        departureTime: '16:32, 26.01.2024'
    }, {
        departureStation: 'Курск',
        arrivalTime: '17:28, 26.01.2024',
        stopDuration: '0 мин',
        departureTime: '16:32, 26.01.2024'
    },
    {
        departureStation: 'Орел',
        arrivalTime: '17:28, 26.01.2024',
        stopDuration: '2 мин',
        departureTime: '16:32, 26.01.2024'
    },
];

const TicketTimetable = () => {
    return (
        <div className={"flex flex-col gap-5 mt-5"}>
            <hr className={"w-full h-[1px] rounded bg-[#c0c7d1]"}/>
            <table className={""}>
                <thead>
                <tr className={"flex"}>
                    <th className={"text-[#787B86] text-xs min-w-[250px] w-[35%] text-start"}>Станция отправления</th>
                    <th className={"text-[#787B86] text-xs min-w-[220px] w-[30%] text-start"}>Прибытие</th>
                    <th className={"text-[#787B86] text-xs min-w-[170px] w-[20%] text-start"}>Стоянка</th>
                    <th className={"text-[#787B86] text-xs w-[15%] text-start"}>Отправление</th>
                </tr>
                </thead>
                <tbody className={"mt-4 flex flex-col gap-2.5"}>
                {timetable.map((entry, index) => (
                    <tr key={index} className={"flex"}>
                        <td className={"text-xs min-w-[250px] w-[35%]"}>{entry.departureStation}</td>
                        <td className={"text-xs min-w-[220px] w-[30%]"}>{entry.arrivalTime}</td>
                        <td className={"text-xs min-w-[170px] w-[20%]"}>{entry.stopDuration}</td>
                        <td className={"text-xs w-[15%]"}>{entry.departureTime}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export {TicketTimetable};