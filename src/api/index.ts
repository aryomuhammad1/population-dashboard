import axios from "axios";

export type PopulationRecord = {
    Year: string;
    Population: number;
}

export type SourceAnnotation  = {
    source_name: string;
    source_description: string;
}

export type ApiResponse = {
    data: PopulationRecord[];
    source: {
        annotations: SourceAnnotation;
    }[];
}

export const fetchPopulationData = async (): Promise<ApiResponse | null> => {
    try {
        const { data } = await axios.get<ApiResponse>("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
        return data;
    } catch (error) {
        console.error("Failed to fetch data", error);
        return null;
    }
};
