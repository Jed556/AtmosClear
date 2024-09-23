<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control_Allow-Headers: *");
header('Content-Type: application/json');

// Database connection details
$servername = "localhost:3306";  // Or 127.0.0.1
$username = "root";         // Default XAMPP MySQL username is 'root'
$password = "";             // Default XAMPP MySQL password is empty
$dbname = "atmosclear";  // Name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the posted data
$data = json_decode(file_get_contents("php://input"), true);

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $email, $password);

// Set parameters and execute
$username = $data['username'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT); // Hash the password
$stmt->execute();

$response = array("status" => "success", "message" => "New user created successfully");
echo json_encode($response);

$stmt->close();
$conn->close();