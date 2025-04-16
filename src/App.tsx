import React from 'react';
import PopulationLineChart from './components/PopulationLineChart';

function App() {
    return (
        <div className="container">
            <h1>Population Dashboard</h1>
            <div className="charts container">
                <PopulationLineChart />
            </div>
        </div>
    );
}

export default App;
