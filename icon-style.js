let a = 0;

function pass() {
    let passwordField = document.getElementById('password');
    let passIcon = document.getElementById('pass-icon');

    if (a === 1) {
        passwordField.type = 'text';
        passIcon.classList.remove('fa-eye-slash');
        passIcon.classList.add('fa-eye');
        a = 0;
    } else {
        passwordField.type = 'password';
        passIcon.classList.remove('fa-eye');
        passIcon.classList.add('fa-eye-slash');
        a = 1;
    }
}

function togglePass(fieldId, iconId) {
    let passwordField = document.getElementById(fieldId);
    let passIcon = document.getElementById(iconId);

    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      passIcon.classList.remove('fa-eye-slash');
      passIcon.classList.add('fa-eye');
    } else {
      passwordField.type = 'password';
      passIcon.classList.remove('fa-eye');
      passIcon.classList.add('fa-eye-slash');
    }
  }
