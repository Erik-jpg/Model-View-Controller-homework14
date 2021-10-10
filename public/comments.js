const commentsText = document.getElementById('commentText');
const commentBtn = document.getElementById('commentBtn');

const computeComments = async (comment, userId) => {
    const body = {
        content: comment
    };
    if (body.content.length) {
        const response = await fetch(`/api/comments/${postId}`, {
            method: 'POST',
            body: stringify(body),
            headers: { 'Content-type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace(`/comments/${postId}`);
        }else{
            alert('We have failed to post your comment, sorry.');
        }
    }else{
        alert('Please leave a write a comment to be able to respond.');
    }
};

commentBtn.addEventListener('click', () => {
    computeComments(commentText.value, commentBtn.dataset.value)
});