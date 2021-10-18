const { response } = require("express");



const commentsText = document.getElementById('commentText');
const commentBtn = document.getElementById('commentBtn');

const computeBlogs = async (event) => {
    event.preventDefault();
    const title = document.querySelector('input[name="blog-title"]').value;
    const blogContent = document.querySelector('input[name="blog.content"]').value;

    const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            blogContent,
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        console.log(response);
    }
}


const computeComments = async (comment, userId) => {
    const body = {
        content: comment
    };
    if (body.content.length) {
        const response = await fetch(`/api/comments/${postId}`, {
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

// const postBlogBtn = document.querySelector('#postBlogBtn');



commentBtn.addEventListener('click', () => {
    computeComments(commentsText.value);
});
postBlogBtn.addEventListener('click', () => {
    computeBlogs(title.value, blogContent)
})