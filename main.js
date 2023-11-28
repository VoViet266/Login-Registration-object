// Hien thi mat khau 
var eye = document.getElementById('eye');
var password = document.getElementById('password');
eye.addEventListener('click', function(){
    if(password.type === 'password'){
        password.type = 'text';
        eye.src = 'image/hidden.png';
    }
    else{
        password.type = 'password';
        eye.src = 'image/eye.png';
    }
});
  //Ham luu vao localStorage
function SetLocalStorage() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Tao doi tuong user de luu vao localStorage
  const user = {
    username: username,
    email: email,
    password: password
};
    // Luu vao localStorage
    var json = JSON.stringify(user);
    localStorage.setItem('username', json);
}
// day dinh nghia email
function checkEmail() {
  const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  email.value = email.value.trim();
  if (regexEmail.test(email.value)) {
    return true;
  }
  else {
    return false;
  }
}
// Ham kiem tra  thong tin nhap vao 
function checkEmptyError(inputs) {
    inputs.forEach(input => {
      // Kiem tra rong
      if (input.value.trim() === '') {
        return true;
      }
      else {
        return false;
      }
    });
}
function getLocalStorage() {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const user = JSON.parse(localStorage.getItem('username'));
  if (user.username === username.value && user.password === password.value) {
     return true;
  }
  else {
    return false;
  }
}
  // Xu ly su kien click register
const button = document.getElementById('btn-register');
button.addEventListener('click', function(e) {
  event.preventDefault();
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (checkEmptyError([username, email, password])) {
    alert('Vui long nhap day du thong tin');
    return;
  }
  else {
    if (checkEmail()) {
      SetLocalStorage();
      alert('Đăng ký thành công!!!!!!');
      window.location.href = 'login.html';
    }
    else {
      alert('Email khong hop le');
    }
  }
});
  // Xu ly su kien click login 
function login(e){
  event.preventDefault();
if(username.value !== '' && password.value !== ''){
  if(getLocalStorage()){
    alert('Dang nhap thanh cong');
    window.location.href = 'home.html';
  }
  else{
    alert('Dang nhap that bai');
  }
}
else{
  alert('Vui long nhap day du thong tin');
}
}

