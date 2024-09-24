import { useEffect, useState } from 'react';
import fetchData from './GetData';
import PercentageBlock from './PercentageBlock'; // Assuming PercentageBlock is in the same directory
import { getAPI } from './Server';
import { server } from '../config';

export default function PercentageBlocks() {
    const [sensorData, setSensorData] = useState<any>(null);

    useEffect(() => {
        const fetchSensorData = async () => {
            let url = getAPI(server, "AtmosClear/atmosclear_data.php");
            const data = await fetchData(url);
            const latestData = data[data.length - 1];
            setSensorData({
                pm1: latestData.pm1,
                pm25: latestData.pm2_5,
                pm10: latestData.pm10,
                mq2: latestData.MQ2value
            });
        };

        fetchSensorData(); // Initial fetch

        const intervalId = setInterval(fetchSensorData, 5000); // Fetch data every 5 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    if (!sensorData) {
        return <div>Loading...</div>;
    }

    return (
        <PercentageBlock list={[
            { label: "PM1", color: "blue", value: sensorData.pm1, maxPercentage: 51 },
            { label: "PM10", color: "blue", value: sensorData.pm10, maxPercentage: 425 },
            { label: "PM2.5", color: "blue", value: sensorData.pm25, maxPercentage: 250 },
            { label: "MQ2", color: "red", value: sensorData.mq2, maxPercentage: 4095 }
        ]} />
    );
}