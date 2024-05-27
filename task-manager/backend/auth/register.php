<?php
include_once '../db/db_connection.php';

$data = json_decode(file_get_contents("php://input"), true);
$first_name = $data['first_name'];
$last_name = $data['last_name'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_BCRYPT);

$sql = "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);

if ($stmt->execute([$first_name, $last_name, $email, $password])) {
  echo json_encode(['message' => 'User registered successfully']);
} else {
  echo json_encode(['message' => 'User registration failed']);
}
?>
