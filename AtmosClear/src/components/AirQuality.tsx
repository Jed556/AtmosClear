

export default function checkAirQuality({ pm1, pm25, pm10, mq2 }: any): number {
    if (
        (pm1 >= 0 && pm1 <= 5) ||
        (pm25 >= 0 && pm25 <= 12) ||
        (pm10 >= 0 && pm10 <= 54) ||
        (mq2 >= 0 && mq2 <= 300)
    ) {
        return 0;
    } else if (
        (pm1 >= 6 && pm1 <= 10) ||
        (pm25 >= 13 && pm25 <= 35) ||
        (pm10 >= 55 && pm10 <= 154) ||
        (mq2 >= 301 && mq2 <= 600)
    ) {
        return 1;
    } else if (
        (pm1 >= 11 && pm1 <= 20) ||
        (pm25 >= 36 && pm25 <= 55) ||
        (pm10 >= 155 && pm10 <= 254) ||
        (mq2 >= 601 && mq2 <= 1000)
    ) {
        return 2;
    } else if (
        (pm1 >= 21 && pm1 <= 30) ||
        (pm25 >= 56 && pm25 <= 150) ||
        (pm10 >= 255 && pm10 <= 354) ||
        (mq2 >= 1001 && mq2 <= 1500)
    ) {
        return 3;
    } else if (
        (pm1 >= 31 && pm1 <= 50) ||
        (pm25 >= 160 && pm25 <= 250) ||
        (pm10 >= 355 && pm10 <= 424) ||
        (mq2 >= 1501 && mq2 <= 4094)
    ) {
        return 4;
    } else if (
        pm1 > 51 ||
        pm25 > 250 ||
        pm10 > 425 ||
        mq2 > 4095
    ) {
        return 5;
    } else {
        return 6;
    }
};