function validasi() {
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (fullName != "" && username!="" && password !="") {
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}