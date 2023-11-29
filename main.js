// Hien thi mat khau 
var eye = document.getElementById('eye');
var password = document.getElementById('password');
eye.addEventListener('click', function(){
  // Hien thi mat khau
    if(password.type === 'password'){
        password.type = 'text';
        eye.src = 'image/hidden.png';
    }
    // An mat khau
    else{
        password.type = 'password';
        eye.src = 'image/eye.png';
    }
});
  //Ham luu vao localStorage
function setLocalStorage() {
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
// Ham kiem tra dang nhap
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
// Ham kiem tra  thong tin nhap vao 
function checkEmptyError(inputs) {
  inputs.forEach(input => {
    input.value = input.value.trim();
    // Kiem tra rong
    if (input.value === '') {
      showError(input, `${input.id} can't be empty!!`);
      console.log('Empty');
      return true;
    }
    else {
      showSuccess(input);
      console.log('Not Empty');
      return false;
    }
  });
}
// Ham hien thi loi
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.classList.add('error');
  small.innerText = message;
}
// Ham hien thi thanh cong
function showSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.classList.remove('error');
  small.innerText = '';
}
  // Xu ly su kien click register
const button = document.getElementById('btn-register');
button.addEventListener('click', function(e) {
  event.preventDefault();
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  checkEmptyError([username, email, password]);
  //điều kiện input 
  if(username.value !== '' && email.value !== '' && password.value !== ''){
    if(!checkEmail()){
      showError(email, 'Email isn\'t valid');
    }
    else{
      alert('Successful registration!');
      setLocalStorage();
      console.log('Successful registration!');
      window.location.href = 'login.html';
    }
  }
});
  // Xu ly su kien click login 
function login(e){
  event.preventDefault();
if(username.value !== '' && password.value !== ''){
  if(getLocalStorage()){
    alert('Successful login');
    window.location.href = 'home.html';
  }
  else{
    alert('Successful login');
  }
}
else{
  checkEmptyError([username, password]);
  if(username.value !== '' && password.value !== ''){
    if(getLocalStorage()){
      alert('Successful login');
      window.location.href = 'home.html';
    }
    else{
      alert('fail login');
    }
  }
}
}

