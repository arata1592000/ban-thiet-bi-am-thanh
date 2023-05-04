document.addEventListener('DOMContentLoaded', function() {
    var listAccount = JSON.parse(localStorage.getItem('listAccount'));
    if (listAccount == null) {
        var listAccount = [];
    }

    var table = document.getElementById("list-account");
    for (var i = 0; i < listAccount.length; i++) {
        var row = document.createElement("tr");
        var cellUsername = document.createElement("td");
        var cellPassword = document.createElement("td");
        var cellEmail = document.createElement("td");
        var cellTelephone = document.createElement("td");
        cellUsername.appendChild(document.createTextNode(listAccount[i].username));
        cellPassword.appendChild(document.createTextNode(listAccount[i].password));
        cellEmail.appendChild(document.createTextNode(listAccount[i].email));
        cellTelephone.appendChild(document.createTextNode(listAccount[i].telephone));
        row.appendChild(cellUsername);
        row.appendChild(cellPassword);
        row.appendChild(cellEmail);
        row.appendChild(cellTelephone);
        table.appendChild(row);
    }
});