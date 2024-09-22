<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control_Allow-Headers: *");
// Database connection details
$servername = "localhost:3306";  // Or 127.0.0.1
$username = "root";         // Default XAMPP MySQL username is 'root'
$password = "";             // Default XAMPP MySQL password is empty
$dbname = "atmosclear";  // Name of your database

// Set the response header to indicate JSON content
header('Content-Type: application/json');

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

// SQL query to retrieve data from table ('data')
$sql = "SELECT * FROM data";
$result = $conn->query($sql);

$data = [];  // Initialize an empty array to store data

// If rows are returned from the query
if ($result->num_rows > 0) {
    // Fetch each row and push it into the $data array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Echo the data array as a JSON-encoded string
echo json_encode($data);

// Close the database connection
$conn->close();