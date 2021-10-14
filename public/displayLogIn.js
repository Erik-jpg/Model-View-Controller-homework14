const selectLoginElement = async (event) => {
    event.preventDefault();

    const email = document.querySelector('email-login').value.trim();
    const password = document.querySelector('password-login').value.trim();

    if(email && password) {
        const response = await fetch('/api/users/signin', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};
const selectSignupElement = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if(name && email && password) {
        const response = await fetch('/api/users', {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', selectLoginElement);
document.querySelector('.signup-form').addEventListener('submit', selectSignupElement);
//         if (body.username.length && body.password.length) {
//             const response = await fetch(`/api/users/sign-in/${username}`, {
//                 method: 'POST',
//                 body: JSON.stringify(body),
//                 headers: { 'Content-type': 'application/json'},
//             });
//             if (response.ok) {
//                 document.location.replace(`/users/${username}`);
//             }else{
//                 alert('login failed.');
//             }
//         }else{
//                 alert('Please enter your login name and password');
//             }
//         };
//         submitBtnEl.addEventListener('click', (event) => {
//             event.preventDefault();
//             computeLogin(usernameInput.value, passwordInput.value);
//         });
//     };
// module.exports = displayLogIn;