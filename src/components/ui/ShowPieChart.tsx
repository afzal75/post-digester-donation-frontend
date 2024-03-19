/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetDonationStatisticsQuery } from "@/redux/features/donation/donation";
import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Cell,
    LabelList,
    Legend,
} from "recharts";

const ShowPieChart = () => {
    const { data } = useGetDonationStatisticsQuery(undefined);

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <ResponsiveContainer width="100%" height={500}>
            <PieChart>
                <Legend layout="vertical" verticalAlign="bottom" />
                <Pie
                    data={data && data?.statistics}
                    nameKey="_id"
                    dataKey="totalDonation"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                >
                    <LabelList dataKey="totalDonation" position="top" />
                    {data?.statistics?.map((_entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default ShowPieChart;
