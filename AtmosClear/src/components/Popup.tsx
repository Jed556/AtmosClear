import { useEffect, useState } from 'react';
import fetchData from './GetData';
import Swal from 'sweetalert2';
import checkAirQuality from './AirQuality';

export default function Popup(url: string, refreshInterval = 3000) {
    const [atmosclearData, setAtmosclearData] = useState<any>(null);
    const [data, setData] = useState<any[]>([]);
    const [list, setList] = useState<any[]>([]);
    const [columnNames, setColumnNames] = useState<string[]>([]);

    useEffect(() => {
        async function fetchList() {
            setData(await fetchData(url));

            const airQualityList = data.map((item) => ({
                id: item.id,
                pm25: item.pm25,
                location: item.location,
                timestamp: item.timestamp,
            }));
            setList(airQualityList);
        }

        fetchList();

        let Popup = {};
        let type = checkAirQuality(list);

        switch (type) {
            case 1:
                Popup = {
                    icon: "error",
                    title: "Dangerous",
                    text: "Dangerous levels of PM2.5 detected!",
                    footer: '<a href="#">See Interventions</a>'
                }
                break;
            case 2:
                Popup = {
                    icon: "warning",
                    title: "Warning",
                    text: "Warning: PM2.5 levels are high.",
                    footer: '<a href="#">See Interventions</a>'
                }
                break;
            case 3:
                Popup = {
                    icon: "error",
                    title: "Information",
                    text: "PM2.5 levels are normal.",
                    footer: '<a href="#">See Interventions</a>'
                }
                break;
            case 4:
                Popup = {
                    icon: "error",
                    title: "Success",
                    text: "PM2.5 levels are low.",
                    footer: '<a href="#">See Interventions</a>'
                }
                break;

        }
        Swal.fire(Popup);

        const intervalId = setInterval(fetchList, refreshInterval); // Set up interval

        return () => clearInterval(intervalId);
    }, [url, refreshInterval]);
    return;
};