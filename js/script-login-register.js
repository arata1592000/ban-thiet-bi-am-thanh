document.addEventListener('DOMContentLoaded', function() {

    var listAccount = JSON.parse(localStorage.getItem('listAccount'));
    if (listAccount == null) {
        var listAccount = [];
    }

    const form = document.querySelector('.wrapper .form');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    registerLink.addEventListener('click', () => {
        form.classList.add('register');
    });
    loginLink.addEventListener('click', () => {
        form.classList.remove('register');
    });

    var btnRegister = document.getElementById('btnRegister');
    btnRegister.addEventListener('click', function() {
        if (checkFormalEmail() == true && checkFormalPassword() == true && checkFormalUsername() == true && checkFormalTelephone() == true) {

            var account = {
                username: txtUsernameRegister.value,
                password: txtPasswordRegister.value,
                email: txtEmail.value,
                telephone: txtTelephone.value,
            };
            listAccount.push(account);
            localStorage.setItem('listAccount', JSON.stringify(listAccount));
            alert("Đăng ký thành công");
            window.location.href = '../html/list-account.html';
            return;
        }
        alert("Vui lòng nhập đúng thông tin");
        event.preventDefault();
    });

    var btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click', function() {
        for (let i = 0; i < listAccount.length; i++) {
            if (txtUsernameLogin.value == listAccount[i].username && txtPasswordLogin.value == listAccount[i].password) {
                alert("Đăng nhập thành công");
                window.location.href = '../index.html';
                return;
            }
        };
        alert("Đăng nhập thất bại");
        event.preventDefault();
        return false;
    })



    var txtUsernameLogin = document.getElementById('txtUsernameLogin');
    var txtPasswordLogin = document.getElementById('txtPasswordLogin');
    var txtUsernameRegister = document.getElementById('txtUsernameRegister');
    var txtPasswordRegister = document.getElementById('txtPasswordRegister');
    var txtEmail = document.getElementById('txtEmail');
    var txtTelephone = document.getElementById('txtTelephone');

    function checkFormalUsername() {
        var nofitication = document.getElementById('notiUsernameRegister');
        var regUsername = /^[a-zA-Z0-9]{6,15}/;
        var label = document.querySelector('input label');
        if (txtUsernameRegister.value.trim() == '') {
            nofitication.textContent = "Không được để trống tên tài khoản";
            nofitication.style.color = "red";
            return false;
        }
        if (!regUsername.test(txtUsernameRegister.value)) {
            nofitication.textContent = "Tên tài khoản không hợp lệ, tối thiểu phải 6 kí tự và tối đa phải 15 kí tự";
            nofitication.style.color = "red";
            return false;
        }
        for (let i = 0; i < listAccount.length; i++) {
            if (txtUsernameRegister.value == listAccount[i].username) {
                nofitication.textContent = "Tên tài khoản đã được sử dụng";
                nofitication.style.color = "red";
                return false;
            }
        }
        nofitication.textContent = "Tên tài khoản hợp lệ";
        nofitication.style.color = "#66CC00";
        return true;
    };

    function checkFormalPassword() {
        var nofitication = document.getElementById('notiPasswordRegister');
        var regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (txtPasswordRegister.value.trim() == '') {
            nofitication.textContent = "Không được để trống mật khẩu";
            nofitication.style.color = "red";
            return false;
        }
        if (!regPassword.test(txtPasswordRegister.value)) {
            nofitication.textContent = "Mật khẩu không hợp lệ, phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường và số";
            nofitication.style.color = "red";
            return false;
        }
        nofitication.textContent = "Mật khẩu hợp lệ";
        nofitication.style.color = "#66CC00";
        return true;
    };

    function checkFormalEmail() {
        var nofitication = document.getElementById('notiEmail');
        var regEmail = /^[a-zA-Z0-9]+@gmail\.com$/;
        if (txtEmail.value.trim() == '') {
            nofitication.textContent = "Không được để trống email";
            nofitication.style.color = "red";
            return false;
        }
        if (!regEmail.test(txtEmail.value)) {
            nofitication.textContent = "Email không hợp lệ, phải là địa chỉ email của Gmail (ví dụ: example@gmail.com)";
            nofitication.style.color = "red";
            return false;
        }
        nofitication.textContent = "Email hợp lệ";
        nofitication.style.color = "#66CC00";
        return true;
    };

    function checkFormalTelephone() {
        var nofitication = document.getElementById('notiTelephone');
        var regTelephone = /^0[0-9]{9,10}$/;
        if (txtTelephone.value.trim() == '') {
            nofitication.textContent = "Không được để trống số điện thoại";
            nofitication.style.color = "red";
            return false;
        }
        if (!regTelephone.test(txtTelephone.value)) {
            nofitication.textContent = "Số điện thoại không hợp lệ, phải bắt đầu bằng số 0 và có từ 10 đến 11 chữ số";
            nofitication.style.color = "red";
            return false;
        }
        nofitication.textContent = "Số điện thoại hợp lệ";
        nofitication.style.color = "#66CC00";
        return true;
    };

    txtUsernameRegister.addEventListener('blur', checkFormalUsername);
    txtPasswordRegister.addEventListener('blur', checkFormalPassword);
    txtEmail.addEventListener('blur', checkFormalEmail);
    txtTelephone.addEventListener('blur', checkFormalTelephone);

});