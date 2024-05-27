<?php
include_once '../db/db_connection.php';

$id = $_GET['id'];

$sql = "DELETE FROM tasks WHERE id = ?";
$stmt = $pdo->prepare($sql);

if ($stmt->execute([$id])) {
  echo json_encode(['message' => 'Task deleted successfully']);
} else {
  echo json_encode(['message' => 'Failed to delete task']);
}
?>
