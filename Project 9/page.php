<?php
session_start();
require('dataBase.php');
if (!isset($_SESSION['user_id'])) 
{
    header("Location: openFirst.html");
    exit();
}
$user_id = $_SESSION['user_id'];
$role = $dbreg->query("SELECT role FROM users WHERE id=$user_id");
if ($role->num_rows > 0) {
    $user_role = $role->fetch_assoc()['role'];
    if ($user_role == 'admin') 
    {
        $users = $dbreg->query("SELECT id, username FROM users");
        if ($users->num_rows > 0) 
        {
            echo "<div class='admin-panel'>";
            echo "<h3>Панель администратора:</h3>";
            echo "<div class='flex'><table>";
            echo "<tr> <td>ID</td>  <td>Имя пользователя</td></tr>"; 
            while ($eachUser = $users->fetch_assoc()) 
            {
                echo "<tr><td>".$eachUser['id'] . "</td><td>" . $eachUser['username'] . "</td>   <td><button onclick='editUserData(" . $eachUser['id'] . ")'>Изменить</button></td>     <td><button onclick='deleteData(" . $eachUser['id'] . ")'>Удалить</button></td>";
            }
            echo "</table></div>";
            echo "<button onclick='addUser()'>Добавить пользователя</button>";
            echo "</div>";
        } 
        else 
        {
            echo "Зарегистрированных пользователей еще нет.";
        }
    }
    $result = $dbreg->query("SELECT * FROM users WHERE id=$user_id");
    if ($result->num_rows > 0) 
    {
        $user = $result->fetch_assoc();
        echo "<h2> </h2>";
    } 
    else 
    {
        echo "Пользователь не найден!";
    }
} 
else 
{
    header("Location: openFirst.html");
    exit();
}
$dbreg->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Главная страница</title>
</head>
<body>
    <div class="container">
        <h2>Добро пожаловать, <?php echo $user['username']; ?>!</h2>
        <p>Ваш ID: <?php echo $user['id']; ?></p>
        <h3>Изменить логин/пароль</h3>
        <form action="editUser.php" method="post">
            <input type="hidden" name="edit_user_id" id="edit_user_id" value="<?php echo $user['id'];?>">
            <label for="new_username">Новое имя пользователя:</label>
            <input type="text" id="new_username" name="new_username" value="<?php echo $user['username'];?>" required>
            <label for="new_password">Новый пароль:</label>
            <input type="password" id="new_password" name="new_password" required>
            <button type="submit">Сохранить изменения</button><br><br>
            <button onclick="deleteData(<?php echo $user['id']?>)">Удалить данного пользователя</button>
        </form>
        <br>
        <a href="logout.php">Выйти</a>
    </div>
    <script src="admin.js">
    </script>
</body>
</html>