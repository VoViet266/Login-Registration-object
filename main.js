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
})
function checkEmptyError(inputs) {
    let isEmpty = false;
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        isEmpty = true;
      }
    });
    if (!isEmpty) {
      // Thực hiện mã code khi không có trường input nào rỗng
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      user = {
        username: username,
        email: email,
        password: password
      };
      var json = JSON.stringify(user);
      localStorage.setItem('username', json);
      alert('Đăng nhập thành công');
      window.location.href = "login.html";
    }
    else {
      alert('Vui lòng nhập đầy đủ thông tin');
    }
  }
  const button = document.getElementById('btn-register');
  button.addEventListener('click', function() {
    event.preventDefault();
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    checkEmptyError([username, email, password]);
  });
function login(e) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    var user = localStorage.getItem('username');
    var data = JSON.parse(user);
    if(data == null){
        alert("Login failed");
    }
    if(data.username == username && data.password == password){
        alert("Login success");
        window.location.href = "index.html";
    }
    else{
        alert("Login failed");
    }
}

