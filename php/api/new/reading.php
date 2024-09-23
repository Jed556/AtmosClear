<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control_Allow-Headers: *");
header('Content-Type: application/json');

// Database connection details
$servername = "localhost:3306";  // Or 127.0.0.1
$username = "root";         // Default XAMPP MySQL username is 'root'
$password = "";             // Default XAMPP MySQL password is empty
$dbname = "atmosclear";  // Name of your database


$connect = @mysqli_connect($servername, $username, $password, $dbname);

if (!$connect) {
    echo "Error: " . mysqli_connect_error();
    exit();
}

echo "Connection Success!<br><br>";

$pm1 = $_GET["PM1.0"];
$pm10 = $_GET["PM10"];
$pm2_5 = $_GET["PM2.5"];
$temp = $_GET["Temperature"];
$humid = $_GET["Humidity"];
$MQ2 = $_GET["MQ2"];

$query = "INSERT INTO atmosclear_data (PM1.0, PM10, PM2.5, Temperature, Humidity, MQ2) VALUES ($pm1,$pm10,$pm2_5,$temp,$humid,$MQ2)";
$result = mysqli_query($connect, query: $query);

if ($result) {
    echo "Insertion Success!<br>";
} else {
    echo "Error: " . mysqli_error($connect);
}

mysqli_close($connect);
?>