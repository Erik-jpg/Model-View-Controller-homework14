const selectLoginElement = document.getElementById('select-login');
const selectCreateElement = document.getElementById('select-create');
const displayLogIn = (event) => {
    selectLoginElement.parentNode.removeChild(selectLoginElement);
    selectCreateElement.parentNode.removeChild(selectCreateElement);

    const columnsDiv = document.createElement('div');
    columnsDiv.classList.add('columns');
    const singleColumnsDiv = document.createElement('div');
    singleColumnsDiv.classList.add('columns', );

    const loginForm = document.createElement('form');
    const usernameInput = document.createElement('input');
    const passwordInput = document.createElement('input');
    const usernameLabel = document.createElement('label');
    const passwordLabel = document.createElement('label');
    const submitBtnEl = document.createElement('input');
    const usernameField = document.createElement('div');
    const usernameControlDiv = document.createElement('div');
    const passwordField = document.createElement('div');
    const passwordControlDiv = document.createElement('div');

    submitBtnEl.type = 'submit';
    usernameLabel.textContent = 'username';
    passwordLabel.textContent = 'password';
    submitBtnEl.value = 'login';

    columnsDiv.classList.add('is-centered');
    passwordInput.classList.add('input');
    submitBtnEl.classList.add('button', 'submitBtn');
    usernameInput.classList.add('input');
    usernameField.classList.add('field');
    loginForm.classList.add('box');
    usernameControlDiv.classList.add('control');
    passwordControlDiv.classList.add('control');
    passwordField.classList.add('field');

    usernameField.appendChild(usernameLabel);
    usernameField.appendChild(usernameControlDiv);
    usernameControlDiv.appendChild(usernameInput);
    passwordField.appendChild(passwordLabel);
    passwordField.appendChild(passwordControlDiv);
    passwordControlDiv.appendChild(passwordInput);
    loginForm.appendChild(usernameField);
    loginForm.appendChild(passwordField);
    loginForm.appendChild(submitBtnEl);

    singleColumnsDiv.appendChild(loginForm);
    columnsDiv.appendChild(singleColumnDiv);
    document.body.appendChild(columnsDiv);

    const computeLogin = async (username, password) => {
        const body = {
            username: username,
            password: password
        };
        console.log(body);

        if (body.username.length && body.password.length) {
            const response = await fetch(`/api/users/sign-in/${username}`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { 'Content-type': 'application/json'},
            });
            if (response.ok) {
                document.location.replace(`/users/${username}`);
            }else{
                alert('login failed.');
            }
        }else{
                alert('Please enter your login name and password');
            }
        };
        submitBtnEl.addEventListener('click', (event) => {
            event.preventDefault();
            computeLogin(usernameInput.value, passwordInput.value);
        });
    };
module.exports = displayLogIn;