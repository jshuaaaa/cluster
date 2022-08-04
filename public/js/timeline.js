document.getElementById('post-timeline').addEventListener('click', postToTimeline)


async function postToTimeline(event) {
    event.preventDefault(event)
    const post_content = document.getElementById('post').value.trim()
    if(post_content) {
        console.log(JSON.stringify(post_content))
        const post = await fetch('/api/posts/timeline-post', {
            method: 'POST',
            body: JSON.stringify({post_content}),
            headers: { 'Content-Type': 'application/json' },
    })
    if (post.ok) {
        window.location.href = '/home'
    } else {
        alert('Failed to log in please try again')
    }
    } else {
        alert("Failed to post please try again")
    }
} 