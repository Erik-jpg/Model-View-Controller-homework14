const selectLoginElement = document.getElementById('selectLogin')
const selectCreateElement = document.getElementById('selectCreate')
import displayCreateUsers from "./displayCreateUser"
import displayLogIn from "./displayLogIn"


selectLoginElement.addEventListener('click', displayLogIn);
selectCreateElement.addEventListener('click', displayCreateUsers);

// handlebars.registerHelper()

//handlebars



// submitBtnEl.addEventListener('click',async () => {
//     const body ={
//         userName: userName.value,
//         password: password.value,
//     };
//     console.log('body is:', body);
    // try {
    //     fetch('/api/sign-in', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': "application/json",
    //       },
    //       body: JSON.stringify(body),
    //     })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       console.log(result);
    //     });
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // });

    
    

