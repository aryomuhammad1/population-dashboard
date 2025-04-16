import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { PopulationRecord, fetchPopulationData } from '../api';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DD0', '#FF6699', '#FF4444'];

const PopulationPieChart = () => {
    const [chartData, setChartData] = useState<PopulationRecord[]>([]);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchPopulationData();
            if (data && data.data) {
                const sortedData = [...data.data].sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
                setChartData(sortedData);
            }
        };
        loadData();
    }, []);

    return (
        <div className="chart-container">
            <h3>Population Distribution</h3>
            <ResponsiveContainer
                width="100%"
                height={350}>
                <PieChart>
                    <Pie
                        data={chartData}
                        dataKey="Population"
                        nameKey="Year"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}>
                        {chartData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PopulationPieChart;
