<?php

if(empty($_POST["username"])){
    die("Name is required");
}

if($_POST["password"] !== $_POST["confirm-password"]){
    die("Password must match");
}

$mysqli = require __DIR__ . "/database.php";

$sql = "INSERT INTO users(username, password)
        VALUES(?, ?)";
    
$stmt = $mysqli->stmt_init();

if(!$stmt->prepare($sql)){
    die("SQL error: " . $mysqli->error);
}

$stmt->bind_param("ss", 
    $_POST["username"],
    $_POST["password"]);

if($stmt->execute()){
    header("Location: signup-success.html");
    exit;
} else {
    if($mysqli->errno === 1062){
        die("Username already exist");
    } else{
        die($mysqli->error . " " . $mysqli->errno);   
    }
}
