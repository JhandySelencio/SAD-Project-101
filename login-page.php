<?php

$is_invalid = false;

if($_SERVER["REQUEST_METHOD"] === "POST"){
    $mysqli = require __DIR__ . "/database.php";
    $sql = sprintf("SELECT * FROM users
                    WHERE username = '%s'",
                    $mysqli->real_escape_string($_POST["username"]));

    $result = $mysqli->query($sql);
    session_start();

    $user = $result->fetch_assoc();

    if($user){
        if($_POST["password"] == $user["password"]){
            session_start();
            $_SESSION["user_id"]=$user["id"];
            header("Location: dashboard-page.html");
        }
    }

    $is_invalid = true;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login-style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"/>
    <script src="icon-style.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="box-a">
         <?php if($is_invalid): ?>
            <div class="alert">
                 <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                 Invalid username or password.
            </div>
        <?php endif; ?>
        <form method="post">
            <div>
             <h2>Welcome back!</h2>
            </div>
            <input type="text" placeholder="Username" id="username" name="username" value="<?= htmlspecialchars($_POST["username"] ?? "") ?>">
            <div class="box-wrapper">
                <input type="password" placeholder="Password" id="password" name="password">
                <i id="pass-icon" class="fa-solid fa-eye-slash" onclick="pass()"></i>
            </div>
            <input type="submit" name="submit" value="Login" id="inputButton">
            <!--<button onclick="location.href='http://127.0.0.1:5501/dashboard-page.html#'">Login</button>-->
            <p>Don't have an account yet?
            <a href="register-page.html">Sign up</a>
            now</p>
        </form>
    </div>
</body>
</html>
