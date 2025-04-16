import React, { useEffect, useState } from 'react';
import { fetchPopulationData, SourceAnnotation } from '../api';

const CensusInfo = () => {
    const [source, setSource] = useState<SourceAnnotation | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchPopulationData();
            if (data?.source && data.source.length > 0) {
                const sourceFromApi = data.source[0].annotations;
                setSource(sourceFromApi);
            }
        };

        loadData();
    }, []);

    if (!source) return <p>Loading information...</p>;

    return (
        <div className="census-info">
            <h2>{source.name}</h2>
            <p>{source.description}</p>
        </div>
    );
};

export default CensusInfo;
