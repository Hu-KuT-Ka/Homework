function editUserData(userId) {
    document.getElementById("edit_user_id").value = userId;
    document.getElementById("new_username").value = prompt("Enter new username:", "");
    document.getElementById("new_password").value = prompt("Enter new password:", "");
    document.forms[0].submit();
}
function deleteData(userId) {
    var confirmDelete = confirm("Вы уверены, что хотите удалить данного пользователя?");
    if (confirmDelete) {
        var deleteForm = document.createElement("form");
        deleteForm.method = "post";
        deleteForm.action = "deleteUsers.php";
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = "user_id";
        input.value = userId;
        deleteForm.appendChild(input);
        document.body.appendChild(deleteForm);
        deleteForm.submit();
    }
}
function addUser() {
    var new_username = prompt("Enter new username:", "");
    var new_password = prompt("Enter new password:", "");
    var usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.name = "new_username";
    usernameInput.value = new_username;
    var passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.name = "new_password";
    passwordInput.value = new_password;
    var addButton = document.createElement("button");
    addButton.type = "submit";
    var form = document.createElement("form");
    form.method = "post";
    form.action = "addUsers.php";
    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(addButton);
    document.body.appendChild(form);
    form.submit();
}