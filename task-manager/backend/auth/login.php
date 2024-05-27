<?php
include_once '../db/db_connection.php';

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$password = $data['password'];

$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$email]);
$user = $stmt->fetch();

if ($user && password_verify($password, $user['password'])) {
  echo json_encode(['message' => 'Login successful', 'user' => $user]);
} else {
  echo json_encode(['message' => 'Invalid credentials']);
}
?>
