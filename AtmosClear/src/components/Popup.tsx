import { useEffect, useState } from 'react';
import fetchData from './GetData';
import Swal from 'sweetalert2';
import checkAirQuality from './AirQuality';

export default function Popup(url: string, refreshInterval = 20000) {
    const [dismissed, setDismissed] = useState(true);
    let interval = refreshInterval;

    useEffect(() => {
        async function checkAlert() {
            const data = await fetchData(url);

            console.log(data);

            const latestData = data[data.length - 1];
            const airQualityList = {
                pm1: latestData.pm1,
                pm25: latestData.pm2_5,
                pm10: latestData.pm10,
                mq2: latestData.MQ2value
            };
            console.log(airQualityList)

            let type = checkAirQuality(airQualityList);
            console.log(type);

            switch (type) {
                case 0:
                    Swal.fire({
                        icon: "success",
                        title: "Good",
                        text: "Air quality is good. No immediate health risks.",
                        footer: '<a href="reports#good">See Interventions</a>'
                    }).then((stat) => { setDismissed(stat.isDismissed) });
                    break;
                case 1:
                    Swal.fire({
                        icon: "success",
                        title: "Moderate",
                        text: "Air quality is okay. No immediate health risks.",
                        footer: '<a href="reports#good">See Interventions</a>'
                    }).then((stat) => { setDismissed(stat.isDismissed) });
                    break;
                case 2:
                    Swal.fire({
                        icon: "warning",
                        title: "Unhealthy for Sensitive Groups",
                        text: "Air quality is unhealthy for sensitive groups. Take precautions.",
                        footer: '<a href="reports#someunhealthy">See Interventions</a>'
                    }).then((stat) => { setDismissed(stat.isDismissed) });
                    break;
                case 3:
                    Swal.fire({
                        icon: "warning",
                        title: "Very Unhealthy",
                        text: "Air quality is very unhealthy. Avoid outdoor activities.",
                        footer: '<a href="reports#unhealthy">See Interventions</a>'
                    }).then((stat) => { setDismissed(stat.isDismissed) });
                    break;
                case 4:
                    Swal.fire({
                        icon: "error",
                        title: "Hazardous",
                        text: "Air quality is hazardous. Stay indoors and keep windows closed.",
                        footer: '<a href="reports#hazardous">See Interventions</a>'
                    }).then((stat) => { setDismissed(stat.isDismissed) });
                    break;
            }
        }

        checkAlert();
    }, [url, interval]);
    return;
};