<?php
include_once '../db/db_connection.php';

$status = isset($_GET['status']) ? $_GET['status'] : '';
$sort_by = isset($_GET['sort_by']) ? $_GET['sort_by'] : 'creation_date';

$sql = "SELECT * FROM tasks WHERE 1=1";

if ($status) {
  $sql .= " AND status = ?";
}

$sql .= " ORDER BY $sort_by";

$stmt = $pdo->prepare($sql);

if ($status) {
  $stmt->execute([$status]);
} else {
  $stmt->execute();
}

$tasks = $stmt->fetchAll();

echo json_encode($tasks);
?>