import React, { useEffect, useState } from 'react';
import CensusInfo from './components/CensusInfo';
import { fetchPopulationData, PopulationRecord } from './api';
import PopulationLineChart from './components/PopulationLineChart';
import PopulationPieChart from './components/PopulationPieChart';
import Filter from './components/Filter';

function App() {
    const [data, setData] = useState<PopulationRecord[]>([]);
    const [startYear, setStartYear] = useState('2000');
    const [endYear, setEndYear] = useState('2021');

    useEffect(() => {
        const load = async () => {
            const result = await fetchPopulationData();
            if (result && result.data) {
                const sorted = [...result.data].sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
                setData(sorted);
                setStartYear(sorted[0].Year);
                setEndYear(sorted[sorted.length - 1].Year);
            }
        };
        load();
    }, []);

    const handleChange = (start: string, end: string) => {
        if (parseInt(start) <= parseInt(end)) {
            setStartYear(start);
            setEndYear(end);
        }
    };

    const filteredData = data.filter(
        (d) => parseInt(d.Year) >= parseInt(startYear) && parseInt(d.Year) <= parseInt(endYear)
    );
    const yearOptions = [...new Set(data.map((d) => d.Year))];

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
            <PopulationLineChart data={filteredData} />
            <PopulationPieChart data={filteredData} />
        </div>
    );
}

export default App;
