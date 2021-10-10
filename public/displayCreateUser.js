const selectLoginElement = document.getElementById('choose-login');
const selectCreateElement = document.getElementById('choose-create');
const displayCreateUsers = (event) => {
    selectLoginElement.parentNode.removeChild(selectLoginElement);
    selectCreateElement.parentNode.removeChild(selectCreateElement);

    const columnsDiv = document.createElement('div');
    columnsDiv.classList.add('columns');
    const singleColumnDiv = document.createElement('div');
    singleColumnDiv.classList.add('columns');

    const createForm = document.createElement('form');
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
    usernameLabel.textContent = 'username: ';
    passwordLabel.textContent = 'password ';
    submitBtnEl.value = 'create';

    columnsDiv.classList.add('is-centered');
    passwordInput.classList.add('passwordInput');
    usernameInput.classList.add('userNameInput');
    submitBtnEl.classList.add('button', 'submitBtn');
    createForm.classList.add('box');
    usernameField.classList.add('userNameField');
    usernameControlDiv.classList.add('userNameControl');
    passwordField.classList.add('passwordField');
    passwordControlDiv.classList.add('passwordControl');

    usernameField.appendChild(usernameLabel);
    usernameField.appendChild(usernameControlDiv);
    usernameControlDiv.appendChild(usernameInput);
    passwordField.appendChild(passwordLabel);
    passwordField.appendChild(passwordControlDiv);
    passwordControlDiv.appendChild(passwordInput);
    createForm.appendChild(usernameField);
    createForm.appendChild(passwordField);
    createForm.appendChild(submitBtnEl);

    singleColumnDiv.appendChild(createForm);
    columnsDiv.appendChild(singleColumnDiv);
    document.body.appendChild(columnsDiv);

    const computeCreateUser = async (username, password) => {
        const body = {
            username: username,
            password: password
        };
        console.log('body is: ', body);

        const result = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body),
            
        })
        .then((res) => res.json()).then((result) => {
            console.log(`user created, id is: #${result.id}`);
            return result;
        });
        if (result.id) {
            window.location.href = `/users/${body.username}`;
        } else {
            alert('an error occurred when creating user.');
            window.location.href = '/';
        }
    };

    submitBtnEl.addEventListener('click', (event) => {
        event.preventDefault();
        computeCreateUser(usernameInput.value, passwordInput.value);
    });
};
export default displayCreateUsers;