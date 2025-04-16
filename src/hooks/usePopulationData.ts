import { useState, useEffect } from 'react';
import { PopulationRecord, fetchPopulationData } from '../api';

export const usePopulationData = () => {
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

    return {
        data: filteredData,
        yearOptions,
        startYear,
        endYear,
        handleChange,
    };
};
