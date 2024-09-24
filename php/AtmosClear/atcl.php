<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control_Allow-Headers: *");
header('Content-Type: application/json');

$servername = "localhost:3306";
$username = "root";
$password = "";
$dbname = "atmosclear";

$connect = @mysqli_connect($servername, $username, $password, $dbname);

if (!$connect) {
    echo "Error: " . mysqli_connect_error();
    exit();
}

echo "Connection Success!<br><br>";

$pm1 = $_GET["pm1"];
$pm2_5 = $_GET["pm2_5"];
$pm10 = $_GET["pm10"];
$MQ2value = $_GET["MQ2value"];
$temp = $_GET["temp"];
$humidity = $_GET["humidity"];

$query = "INSERT INTO atmosclear_data (pm1, pm2_5, pm10, MQ2value, temp, humidity) VALUES ('$pm1','$pm2_5','$pm10','$MQ2value', '$temp', '$humidity')";
$result = mysqli_query($connect, $query);

if ($result) {
    echo "Insertion Success!<br>";
} else {
    echo "Error: " . mysqli_error($connect);
}

mysqli_close($connect);
?>