import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import { PopulationRecord, fetchPopulationData } from '../api';

const PopulationLineChart = () => {
    const [chartData, setChartData] = useState<PopulationRecord[]>([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchPopulationData();
            if (data && data.data) {
                const sortedData = [...data.data].sort((a, b) => parseInt(a.Year) - parseInt(b.Year)); // Sort by year (asc)
                setChartData(sortedData);
            }
        };
        loadData();
    }, []);

    return (
        <div className="chart-container">
            <h3>Population Over the Years</h3>
            <ResponsiveContainer
                width="100%"
                height={300}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Year" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="Population"
                        stroke="#8884d8"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PopulationLineChart;
