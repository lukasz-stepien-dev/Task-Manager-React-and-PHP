<?php
include_once '../db/db_connection.php';

$id = $_GET['id'];
$data = json_decode(file_get_contents("php://input"), true);
$title = $data['title'];
$description = $data['description'];
$due_date = $data['due_date'];
$status = $data['status'];

$sql = "UPDATE tasks SET title = ?, description = ?, due_date = ?, status = ? WHERE id = ?";
$stmt = $pdo->prepare($sql);

if ($stmt->execute([$title, $description, $due_date, $status, $id])) {
  echo json_encode(['message' => 'Task updated successfully']);
} else {
  echo json_encode(['message' => 'Failed to update task']);
}
?>
