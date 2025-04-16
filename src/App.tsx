import React from 'react';
import PopulationLineChart from './components/PopulationLineChart';
import PopulationPieChart from './components/PopulationPieChart';

function App() {
    return (
        <div className="container">
            <h1>Population Dashboard</h1>
            <div className="charts container">
                <PopulationLineChart />
                <PopulationPieChart />
            </div>
        </div>
    );
}

export default App;
