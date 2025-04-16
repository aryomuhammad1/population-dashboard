import React from 'react';
import CensusInfo from './components/CensusInfo';
import PopulationLineChart from './components/PopulationLineChart';
import PopulationPieChart from './components/PopulationPieChart';
import Filter from './components/Filter';
import { usePopulationData } from './hooks/usePopulationData';

function App() {
    const { data, yearOptions, startYear, endYear, handleChange } = usePopulationData();

    return (
        <div className="container">
            <h1>US Population Dashboard</h1>
            <CensusInfo />
            <Filter
                years={yearOptions}
                startYear={startYear}
                endYear={endYear}
                onChange={handleChange}
            />
            <PopulationLineChart data={data} />
            <PopulationPieChart data={data} />
        </div>
    );
}

export default App;
