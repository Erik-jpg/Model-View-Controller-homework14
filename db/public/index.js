const userName = document.getElementById('userName');
const password = document.getElementById('password');

const submitBtnEl = document.createElement('submit-btn');


submitBtnEl.addEventListener('click',async () => {
    const body ={
        userName: userName.value,
        password: password.value,
    };
    console.log('body is:', body);
    try {
        fetch('/api/sign-in', {
          method: 'POST',
          headers: {
            'Content-Type': "application/json",
          },
          body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
      } catch (err) {
        throw new Error(err);
      }
      console.log(password.value);
      console.log(userName.value);
    });
    