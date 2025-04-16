import React from 'react';

type FilterProps = {
    years: string[];
    startYear: string;
    endYear: string;
    onChange: (start: string, end: string) => void;
};

const Filter = ({ years, startYear, endYear, onChange }: FilterProps) => {
    return (
        <div className="filter">
            <label>
                Start Year:
                <select
                    value={startYear}
                    onChange={(e) => onChange(e.target.value, endYear)}>
                    {years.map((year) => (
                        <option
                            key={year}
                            value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                End Year:
                <select
                    value={endYear}
                    onChange={(e) => onChange(startYear, e.target.value)}>
                    {years.map((year) => (
                        <option
                            key={year}
                            value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default Filter;
