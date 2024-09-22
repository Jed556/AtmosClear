<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control_Allow-Headers: *");
header('Content-Type: application/json');

// Database connection details
$servername = "localhost:3306";  // Or 127.0.0.1
$username = "root";         // Default XAMPP MySQL username is 'root'
$password = "";             // Default XAMPP MySQL password is empty
$dbname = "atmosclear";  // Name of your database

// Set the response header to indicate JSON content

// Create connection to MySQL
try{
$conn = new mysqli($servername, $username, $password, $dbname);
}catch(PDOException $e){
  echo json_encode(['error' => "DB Connection Fail" . $e->getMessage()]);
  exit;
}

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: {$conn->connect_error}");
}

$sql = "CREATE DATABASE IF NOT EXISTS atmosclear";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

// Select the database
$conn->select_db("atmosclear");

// SQL to create table
$sql = "CREATE TABLE IF NOT EXISTS history (
    Id INT(0) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    DateTime DATETIME NOT NULL,
    PM1_0 INT NOT NULL,
    PM1_5 INT NOT NULL,
    PM2_5 INT NOT NULL,
    Temperature INT NOT NULL,
    Humidity INT NOT NULL,
    MQ INT NOT NULL
)";

$sql = "CREATE TABLE IF NOT EXISTS users (
    Id INT(0) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    DateTime DATETIME NOT NULL,
    Username VARCHAR NOT NULL,
    FirstName VARCHAR NOT NULL,
    LastName VARCHAR NOT NULL,
    Roles VARCHAR NOT NULL,
)";

if ($conn->query($sql) === TRUE) {
    echo "Table history created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();