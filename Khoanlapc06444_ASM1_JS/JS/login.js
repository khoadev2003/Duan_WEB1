// Hiện form Login
const btn_user = document.querySelector('.btn-user');
const overlay = document.querySelector('.form-item');
btn_user.addEventListener('click', () => {

    btn_user.nextElementSibling.classList.add('overlay-active');
    if(overlay.style.display === "block") {
        overlay.style.display = "none"
    }
    else {
        overlay.style.display = "block"
    }  
    
});


overlay.addEventListener('click', () => {
    btn_user.nextElementSibling.classList.remove('overlay-active');
    overlay.style.display = "none"
});


// Khi click chuột ra ngoài thì form sẽ mất
document.addEventListener('click', (event) => {
    const isClickInsideForm = overlay.contains(event.target);
    const isClickInsideButton = btn_user.contains(event.target);
    if (!isClickInsideForm && !isClickInsideButton) {
      overlay.style.display = "none";
      btn_user.nextElementSibling.classList.remove('overlay-active');
    }
});



// Ngăn chặn sự kiện click lan ra bên ngoài form
const inputElements = document.querySelectorAll('.form-item input');
inputElements.forEach((inputElement) => {
  inputElement.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});





// Check form

const submit_login = document.querySelector('.btn-login');
const input_logins = document.querySelectorAll('.input-login');
const regex = /^pc\d{5}$/i;
const regexemail = /^[\w-\.]+@fpt\.edu\.vn$/i;

submit_login.addEventListener('click', (e) => {
    e.preventDefault();
    const errorMessages = [];
    let password = "";
    let confirmPassword = "";
    input_logins.forEach((element) => {
        if (element.name == 'code-student') {
            const value = element.value;
            if (!regexemail.test(value)) {
                errorMessages.push('Email không phải email cao đẳng fpt!');
                element.focus();
            }
        }
        if (element.name == 'password') {
            password = element.value;
            if (!regex.test(password)) {
                errorMessages.push('Mật khẩu là mã sinh viên');
                element.focus();
            }
            if (password.length < 7) {
                errorMessages.push('Độ dài tối thiếu là 7 ký tự!');
                element.focus();
            }
        }
        if (element.name == 'confirm-password') {
            confirmPassword = element.value;
            if (confirmPassword !== password) {
                errorMessages.push('Mật khẩu nhập lại không khớp!');
                element.focus();
            }
        }
    });
    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));
    } else {
        alert('Đăng nhập thành công');
        overlay.style.display = "none"; // Ẩn khung đăng nhập
    }
});


const codeStudentInput = document.querySelector('input[name="code-student"]');
// const codeStudentError = codeStudentInput.nextElementSibling;

codeStudentInput.addEventListener('blur', () => {
    if (!regexemail.test(codeStudentInput.value)) {
        // codeStudentError.textContent = 'Email không phải email cao đẳng fpt!';
        codeStudentInput.focus();
    } else {
        codeStudentError.textContent = '';
    }
});

codeStudentInput.addEventListener('input', () => {
    if (codeStudentInput.value === '') {
        codeStudentError.textContent = 'Vui lòng nhập email!';
    } else if (!regexemail.test(codeStudentInput.value)) {
        // codeStudentError.textContent = 'Email không phải email cao đẳng fpt!';
    } else {
        codeStudentError.textContent = '';
    }
});

const passwordInput = document.querySelector('input[name="password"]');
const passwordError = passwordInput.nextElementSibling; // chọn thẻ span kế tiếp của input

if (!regex.test(passwordInput.value)) {
    passwordError.textContent = 'Mật khẩu là mã sinh viên';
    passwordInput.focus();
} else if (passwordInput.value.length < 7) {
    passwordError.textContent = 'Độ dài tối thiếu là 7 ký tự!';
    passwordInput.focus();
} else {
    passwordError.textContent = ''; // xóa thông báo lỗi nếu không có lỗi
}

const confirmPasswordInput = document.querySelector('input[name="confirm-password"]');
const confirmPasswordError = confirmPasswordInput.nextElementSibling; // chọn thẻ span kế ti


const inputs = document.querySelectorAll('.input-login');
const labels = document.querySelectorAll('label');
const errorMessages = document.querySelectorAll('.error-message');

inputs.forEach((input, index) => {
  input.addEventListener('blur', () => {
    if (!input.value) {
      errorMessages[index].textContent = 'Vui lòng điền thông tin';
      labels[index].classList.add('label-error');
      input.classList.add('input-error');
    } else {
      errorMessages[index].textContent = '';
      labels[index].classList.remove('label-error');
      input.classList.remove('input-error');
    }
  });
});