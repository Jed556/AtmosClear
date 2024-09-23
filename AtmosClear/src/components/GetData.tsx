import axios from 'axios';
async function fetchData(url: string): Promise<any> {
    try {
        const response = await axios.get(url)
        return response.data;
    } catch (error) {
        console.error('Error fetching sensor data:', error);
        return [];
    }
};

export default fetchData;