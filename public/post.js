// This is the area that will handle login and "moving" the user from sign-in to dashboard and comments 




const commentsText = document.getElementById('commentText');
const postBlogBtn = document.getElementById('postBlogBtn');


const computeBlogs = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title-post').value;
    const blogContent = document.querySelector('#text-post').value;

    const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            blogContent,
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        location.reload();
    } else {
        res.status(500);
    }
}


const computeComments = async () => {
    const body = {
        content: commentsText.value
    };
    if (body.content.length) {
        const response = await fetch(`/api/post/${postId}`, {
            method: 'POST',
            body: stringify(body),
            headers: { 'Content-type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/posted`);
        } if (response === 500) {
            alert('We have failed to post your comment, sorry.');
        }
    } else {
        alert('Please login to leave a comment to be able to respond.');
    }
};

postBlogBtn.addEventListener('click', computeBlogs);