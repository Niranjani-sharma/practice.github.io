document.addEventListener("DOMContentLoaded", function () {
    // Sample post data
    const posts = [
        {
            title: "Post Title 1",
            content: "Content of Post 1",
            score: 0,
            comments: [],
        },
        {
            title: "Post Title 2",
            content: "Content of Post 2",
            score: 0,
            comments: [],
        },
        // Add more posts as needed
    ];

    const homepageSection = document.getElementById("homepage");
    const postPageSection = document.getElementById("post-page");
    const commentForm = document.getElementById("comment-form");
    const commentContentInput = document.getElementById("comment-content");

    // Function to display posts on the homepage
    function displayPosts() {
        homepageSection.innerHTML = "";
        posts.forEach((post, index) => {
            const postElement = document.createElement("div");
            postElement.className = "post";
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <div class="votes">
                    <button class="upvote">Upvote</button>
                    <span class="score">${post.score}</span>
                    <button class="downvote">Downvote</button>
                </div>
                <button class="view-comments">View Comments</button>
            `;
            homepageSection.appendChild(postElement);

            // Attach event listeners for upvote, downvote, and view comments
            const upvoteButton = postElement.querySelector(".upvote");
            const downvoteButton = postElement.querySelector(".downvote");
            const viewCommentsButton = postElement.querySelector(".view-comments");

            upvoteButton.addEventListener("click", () => {
                post.score++;
                postElement.querySelector(".score").textContent = post.score;
            });

            downvoteButton.addEventListener("click", () => {
                post.score--;
                postElement.querySelector(".score").textContent = post.score;
            });

            viewCommentsButton.addEventListener("click", () => {
                displayPostPage(index);
            });
        });
    }

    // Function to display the post page with comments
    function displayPostPage(index) {
        const post = posts[index];
        postPageSection.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <div class="votes">
                <button class="upvote${index}">Upvote</button>
                <span class="score">${post.score}</span>
                <button class="downvote${index}">Downvote</button>
            </div>
            <h3>Comments</h3>
            <div class="comments">
                ${post.comments.map(comment => `<p>${comment}</p>`).join("")}
            </div>
            <form id="comment-form">
                <textarea id="comment-content" placeholder="Add a comment"></textarea>
                <button type="submit">Submit</button>
            </form>
        `;

        // Attach event listeners for upvote, downvote, and comment submission
        const upvoteButton = postPageSection.querySelector(`.upvote${index}`);
        const downvoteButton = postPageSection.querySelector(`.downvote${index}`);
        const commentForm = postPageSection.querySelector("#comment-form");
        const commentContentInput = postPageSection.querySelector("#comment-content");

        upvoteButton.addEventListener("click", () => {
            post.score++;
            postPageSection.querySelector(`.score${index}`).textContent = post.score;
        });

        downvoteButton.addEventListener("click", () => {
            post.score--;
            postPageSection.querySelector(`.score${index}`).textContent = post.score;
        });

        commentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const comment = commentContentInput.value;
            if (comment.trim() !== "") {
                post.comments.push(comment);
                displayPostPage(index); // Refresh the post page to display the new comment
            }
        });
    }

    // Display posts on page load
    displayPosts();
});
