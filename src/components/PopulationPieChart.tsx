import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { PopulationRecord } from '../api';
import { COLORS } from '../mocks/colors';

export type PopulationPieChartProps = {
    data: PopulationRecord[];
};

const PopulationPieChart = ({ data }: PopulationPieChartProps) => {
    return (
        <div className="chart-container">
            <h3>Population Distribution</h3>
            <ResponsiveContainer
                width="100%"
                height={350}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="Population"
                        nameKey="Year"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}>
                        {data.map((entry, index) => (
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
