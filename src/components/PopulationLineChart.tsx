import React from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import { PopulationRecord } from '../api';

export type PopulationLineChartProps = {
    data: PopulationRecord[];
};

const PopulationLineChart = ({ data }: PopulationLineChartProps) => {
    return (
        <div className="chart-container">
            <h3>Population Over the Years</h3>
            <ResponsiveContainer
                width="100%"
                height={300}>
                <LineChart data={data}>
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
