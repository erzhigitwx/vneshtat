import {Bar, BarChart, Brush, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import GraphImg from "@/assets/icons/graph.svg?react";
import DashboardImg from "@/assets/icons/dashboard.svg?react";
import CrossImg from "@/assets/icons/cross.svg?react";
import {useEffect, useState} from "react";

interface Month {
    month: string
    days: number
    value: number
}

interface TooltipProps {
    active?: boolean;
    payload?: any[];
    label?: string;
}

const generateMonthlyData = (month: string, days: number, value: number) => {
    const middleIndex = Math.floor(days / 2);
    return {
        data: Array.from({length: days}, (_, index) => ({
            name: month,
            day: index + 1,
            uv: value,
            isMonthCenter: index === middleIndex,
        })),
        startDay: 1,
        endDay: days,
    };
};

const months: Month[] = [
    {month: 'Январь', days: 31, value: 9400},
    {month: 'Февраль', days: 28, value: 8570},
    {month: 'Март', days: 31, value: 8220},
    {month: 'Апрель', days: 30, value: 980},
    {month: 'Май', days: 31, value: 9000},
    {month: 'Июнь', days: 30, value: 970},
    {month: 'Июль', days: 31, value: 5400},
    {month: 'Август', days: 31, value: 8900},
    {month: 'Сентябрь', days: 30, value: 920},
    {month: 'Октябрь', days: 31, value: 8600},
    {month: 'Ноябрь', days: 30, value: 880},
    {month: 'Декабрь', days: 31, value: 9300},
];

const data = months.reduce((acc: any[], {month, days, value}: Month) => {
    return [...acc, ...generateMonthlyData(month, days, value).data];
}, []);

const monthValues: { [key: string]: number } = months.reduce((acc, {month, value}) => {
    acc[month] = value;
    return acc;
}, {} as { [key: string]: number });

const monthlyData = months.map(({month, value}) => ({
    name: month,
    uv: value,
}));

const findMinMax = (data: { min: number, max: number, uv: number }[]) => {
    const values = data.map(d => d.uv);
    const min = Math.min(...values);
    const max = Math.max(...values);
    return {min, max};
};

const CustomTooltip = ({active, payload, label}: TooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} ${payload[0].payload.name} - ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};


const FlightChart = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(90);
    const [displayedData, setDisplayedData] = useState(data.slice(startIndex, endIndex));
    const {min, max} = findMinMax(data);

    const handleBrushChange = (newStartIndex: number | undefined) => {
        if (newStartIndex) {
            setStartIndex(newStartIndex);
            setEndIndex(newStartIndex + 90);
        }
    };

    useEffect(() => {
        setDisplayedData(data.slice(startIndex, endIndex));
    }, [startIndex, endIndex]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const svgNode = document.querySelector('g.recharts-layer.recharts-brush');
            if (svgNode) {
                if (svgNode.childNodes[0] instanceof Element) {
                    (svgNode.childNodes[0] as Element).removeAttribute('stroke');
                }
                if (svgNode.childNodes[1] instanceof Element) {
                    (svgNode.childNodes[1] as Element).setAttribute('rx', '13');
                    (svgNode.childNodes[1] as Element).setAttribute('ry', '13');
                }
            }
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={"overflow-y-auto scroll max-h-[calc(100vh-390px)]"}>
            <div className={"p-9 m-5 rounded-[23px] bg-secondary relative min-h-[calc(100vh-430px)]"}>
                <div className={"flex justify-between items-center mb-5"}>
                    <h2>График цен</h2>
                    <div className={"flex items-center gap-2.5"}>
                        <button
                            className={"p-3 w-9 h-9 flex justify-center items-center rounded-[10px] bg-black cursor-pointer"}>
                            <GraphImg className={"min-h-[20px] min-w-[20px] white-fill"}/>
                        </button>
                        <button
                            className={"p-3 w-9 h-9 flex justify-center items-center rounded-[10px] bg-primary cursor-pointer mr-4"}>
                            <DashboardImg className={"min-h-[20px] min-w-[20px] grey-fill"}/>
                        </button>
                        <button className={"absolute top-5 right-5"}>
                            <CrossImg className={"black-fill min-h-6 min-w-6"}/>
                        </button>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={185} style={{position: "relative", zIndex: "30"}}>
                    <BarChart
                        data={data}
                        margin={{top: 20, right: 0, left: 0, bottom: 30}}
                        barCategoryGap={1}>
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickFormatter={(_, index) => {
                                if (index < displayedData.length && displayedData[index].isMonthCenter) {
                                    const month = displayedData[index].name;
                                    const maxValue = monthValues[month];
                                    return `${month} - ${maxValue}`;
                                }
                                return '';
                            }}
                            tick={{fontSize: 16, fill: "#787B86"}}
                            padding={{left: 50}}
                        />
                        <Tooltip content={<CustomTooltip/>}/>
                        <Bar dataKey="uv" fill="#BFBEFC"/>
                        <ReferenceLine
                            y={max}
                            stroke="#9761FF"
                            strokeWidth={2}
                            label={{
                                value: max,
                                position: 'insideBottomLeft',
                                offset: 5,
                                fill: '#787B86',
                                fontSize: 14,
                            }}
                        />
                        <ReferenceLine
                            y={min}
                            stroke="#9761FF"
                            strokeWidth={2}
                            label={{
                                value: min,
                                position: 'insideBottomLeft',
                                fill: '#787B86',
                                fontSize: 14,
                                offset: 5,
                            }}
                        />
                        <Brush
                            y={140}
                            startIndex={startIndex}
                            endIndex={endIndex}
                            onChange={({startIndex}) => handleBrushChange(startIndex)}
                            dataKey="day"
                            height={30}
                            fill={"none"}
                            travellerWidth={0}
                            stroke={"#BFBEFC"}
                            tickFormatter={() => ''}
                        />
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={80} className={"absolute top-[215px]"}>
                    <LineChart data={[{}, ...monthlyData]} margin={{top: 20, right: 100, left: -60}}>
                        <XAxis
                            dataKey="name"
                            tick={{fontSize: 16, fill: "#787B86"}}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={-2}/>
                        <Line type="linear" dataKey="uv" stroke="#9761FF" dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
                <div className={"mt-8 flex items-center justify-between"}>
                    <div className={"flex items-center gap-2.5"}>
                        <button
                            className={"py-4 px-6 rounded-primary bg-primary max-h-9 flex justify-center items-center"}>
                            <p className={"text-base leading-none"}>2 фев, пт</p>
                        </button>
                        <button
                            className={"py-4 px-6 rounded-primary bg-primary max-h-9 flex justify-center items-center"}>
                            <p className={"text-base leading-none"}>2 фев, пт</p>
                        </button>
                        <button
                            className={"py-4 px-6 rounded-primary bg-primary max-h-9 flex justify-center items-center"}>
                            <p className={"text-base leading-none"}>2 фев, пт</p>
                        </button>
                    </div>
                    <button
                        className={"w-[125px] py-4 px-6 rounded-primary bg-black max-h-9 flex justify-center items-center"}>
                        <p className={"text-base leading-none text-primary"}>Поиск!</p>
                    </button>
                </div>
            </div>
        </div>
    )
};

export {FlightChart};