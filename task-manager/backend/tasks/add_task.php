<?php
include_once '../db/db_connection.php';

$data = json_decode(file_get_contents("php://input"), true);
$title = $data['title'];
$description = $data['description'];
$due_date = $data['due_date'];
$user_id = $data['user_id'];

$sql = "INSERT INTO tasks (title, description, due_date, user_id) VALUES (?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);

if ($stmt->execute([$title, $description, $due_date, $user_id])) {
  echo json_encode(['message' => 'Task added successfully']);
} else {
  echo json_encode(['message' => 'Failed to add task']);
}
?>
