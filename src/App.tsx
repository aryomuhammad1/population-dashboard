import React, { Suspense } from 'react';
import { usePopulationData } from './hooks/usePopulationData';

const CensusInfo = React.lazy(() => import('./components/CensusInfo'));
const PopulationLineChart = React.lazy(() => import('./components/PopulationLineChart'));
const PopulationPieChart = React.lazy(() => import('./components/PopulationPieChart'));
const Filter = React.lazy(() => import('./components/Filter'));

function App() {
    const { data, yearOptions, startYear, endYear, handleChange } = usePopulationData();

    return (
        <div className="container">
            <h1>US Population Dashboard</h1>
            <Suspense fallback={<div>Loading Census Info...</div>}>
                <CensusInfo />
            </Suspense>
            <Suspense fallback={<div>Loading Filters...</div>}>
                <Filter
                    years={yearOptions}
                    startYear={startYear}
                    endYear={endYear}
                    onChange={handleChange}
                />
            </Suspense>
            <div className="charts">
                <Suspense fallback={<div>Loading Line Chart...</div>}>
                    <PopulationLineChart data={data} />
                </Suspense>
                <Suspense fallback={<div>Loading Pie Chart...</div>}>
                    <PopulationPieChart data={data} />
                </Suspense>
            </div>
        </div>
    );
}

export default App;
