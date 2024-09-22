// Function to fetch data from the PHP API
async function fetchSensorData(): Promise<any> {
    try {
        // Fetch data from the PHP server
        const response = await fetch('./getdata.php');

        // Ensure the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Check if the response is JSON
        // const contentType = response.headers.get('content-type');
        // if (!contentType || !contentType.includes('application/json')) {
        //     throw new Error('Response is not JSON');
        // }

        // Parse the JSON data
        const data = await response.json();

        // Handle the data (example: logging it to the console)
        console.log('Fetched sensor data:', data);

        // If you need to process or display the data, you can do it here
        // data.forEach((item: any) => {
        //     console.log(`Temperature: ${item.temperature}, Humidity: ${item.humidity}, Time: ${item.reading_time}`);
        // });

        return data;
    } catch (error) {
        // Handle errors (example: network issues)
        console.error('Failed to fetch sensor data:', error);
    }
}

export default fetchSensorData;