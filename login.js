
function validate(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        var lines = allText.split('\n');
        var name = lines[0];
        var email = lines[1];
        var cpf = lines[2];
        var nameTextbox = document.getElementById('name-textbox');
        var emailTextbox = document.getElementById('email-textbox');
        var cpfTextbox = document.getElementById('cpf-textbox');
        if (nameTextbox.value == name && emailTextbox.value == email && cpfTextbox.value == cpf) {
          alert('Login successful!');
        } else {
          alert('Login failed!');
        }
      }
    }
  }
  rawFile.send(null);
}

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function () {
  validate('info.txt');
}, false);