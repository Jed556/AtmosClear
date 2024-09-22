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