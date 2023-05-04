document.addEventListener('DOMContentLoaded', function() {
    var i = 1;


    //KiemtraHoten:
    var txtHoTen = $("#txtHoTen");
    var tbHoTen = $("#tbHoTen");

    function KiemtraHoten() {
        if (txtHoTen.val() == "") {
            tbHoTen.html("*Bắt buộc nhập");
            return false;
        }
        if (isNaN(txtHoTen.val()) == false) {
            tbHoTen.html("*Nhập sai cú pháp");
            return false;
        }
        tbHoTen.html("*");
        return true;
    }
    txtHoTen.blur(KiemtraHoten);


    // KiemtraSDT:
    var txtSDT = $("#txtSDT");
    var tbSDT = $("#tbSDT");

    function KiemtraSDT() {
        if (txtSDT.val() == "") {
            tbSDT.html("*Bắt buộc nhập");
            return false;
        }
        if (isNaN(txtSDT.val())) {
            tbSDT.html("Phải nhập số");
            return false;
        }
        if (eval(txtSDT.val()) <= 0) {
            tbSDT.html("Nhập số lớn hơn 0");
            return false;
        }
        tbSDT.html("*");
        return true;
    }
    txtSDT.blur(KiemtraSDT);

    //KiemtraEmail;

    var txtEmail = $("#txtEmail");
    var tbEmail = $("#tbEmail");

    function KiemtraEmail() {
        if (txtEmail.val() == "") {
            tbEmail.html("*Bắt buộc nhập");
            return false;
        }
        tbEmail.html("*");
        return true;
    }
    txtEmail.blur(KiemtraEmail);

    //KiemtraCity
    var txtCity = $("#txtCity");
    var tbCity = $("#tbCity");

    function KiemtraCity() {
        if (txtCity.val() == "") {
            tbCity.html("Bắt buộc nhập");
            return false;
        }

        if (isNaN(txtCity.val()) == false) {
            tbCity.html("bắt buộc nhập chữ");
            return false;
        }
        tbCity.html("*");
        return true;
    }
    txtCity.blur(KiemtraCity);

    //KiemtraQuanHuyen

    var txtDistrict = $("#txtDistrict");
    var tbDistrict = $("#tbDistrict");

    function KiemtraDistrict() {
        if (txtDistrict.val() == "") {
            tbDistrict.html("Bắt buộc nhập");
            return false;
        }
        if (isNaN(txtDistrict.val()) == false) {
            tbDistrict.html("Bắt buộc nhập chữ");
            return false;
        }
        tbDistrict.html("*");
        return true;
    }
    txtDistrict.blur(KiemtraDistrict);

    var txtWards = $("#txtWards");
    var tbWards = $("#tbWards");

    function KiemtraWard() {
        if (txtWards.val() == "") {
            tbWards.html("Bắt buộc nhập");
            return false;
        }
        if (isNaN(txtWards.val()) == false) {
            tbWards.html("Bắt buộc nhập chữ");
            return false;
        }
        tbWards.html("*");
        return true;
    }
    txtWards.blur(KiemtraWard);

    var txtAddress = $("#txtAddress");
    var tbAddress = $("#tbAddress");

    function KiemtraAddress() {
        if (txtAddress.val() == "") {
            tbAddress.html("Bắt buộc nhập");
            return false;
        }
        tbAddress.html("*");
        return true;

    }
    txtAddress.blur(KiemtraAddress);

    $("#myOrder").on("click", function() {
        if (!KiemtraHoten() || !KiemtraEmail() || !KiemtraSDT() || !KiemtraCity() || !KiemtraDistrict() || !KiemtraAddress()) {
            alert("Bạn hãy nhập đúng và đầy đủ thông tin");
        } else {
            $("#myModal").modal();
            return true;
        }
    });



});

function showContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}