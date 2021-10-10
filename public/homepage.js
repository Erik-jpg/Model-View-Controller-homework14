const postTitleElement = document.getElementById('postTitle');
const postTextElement = document.getElementById('postText');
const postBtn = document.getElementById('postBtn');

const makeAPost = async (title, content, userId) => {
    const body = {title: title, content: content, userId: userId };
    console.log('error in body: ', body);

    if(body.content.length) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'content-Type': 'application/json' },
        });
        //if validated returns true, await validate then populate with most resent blogs and comments
        console.log('response is: ', response);
        if (response.ok) {
            document.location.reload();
        }else{
            alert('This post has failed.');
        }
    }else{
        alert('You must create a title and blog in order to post.');
    }
};

postBtn.addEventListener('click', () => {
    makeAPost(postTitleElement.value, postTextElement.value, postBtn.dataset.value);
})

const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers:{ 'content-type': 'application/json'}
    });
    if(response.ok) {
        document.location.replace('/');
    }else{
        alert('We have failed to logout, sorry.');
    }
};
document.querySelector('#logout').addEventListener('click', logout);


// const 
// const validateUser = async (username) => {
//     const User = await User.findOne({where: { username: req.params.username 
//     }}),
//     const validatePending = await user.validatePassword(req.body.password);
// } 
// export default 