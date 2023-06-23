import { getComments, comments } from "./add-comment.js";
import { validateCommentForm } from "./validate-comment-form.js";
const commentForm = document.getElementById("comment-form");
const postCommentButton = document.getElementById("post-comment");
const commentName = document.getElementById("name-input");
const commentNameError = document.getElementById("name-input-error");
const commentEmail = document.getElementById("email-input");
const commentEmailError = document.getElementById("email-input-error");
const commentContent = document.getElementById("comment-input");
// const commentContentError = document.getElementById("comment-input-error");
// const confirmSuccess = document.getElementById("comment-posted");

await getComments();
console.log("comments after getComments is: ", comments);
const commentsContainer = document.getElementById("user-comments");

if (comments.length === 0) {
  const defaultPost = document.createElement("h4");
  defaultPost.classList.add("comment-container");
  defaultPost.classList.add("comment-title");
  defaultPost.innerHTML = `No comments yet...<br>Be the first to comment.`;
  commentsContainer.appendChild(defaultPost);
} else {
  comments.forEach((comment) => {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-container");
    commentsContainer.appendChild(commentContainer);

    const title = document.createElement("h4");
    title.classList.add("comment-title");
    title.textContent = `${comment.commentName} posted:`;
    console.log("commentName is: ", comment.commentName);
    commentContainer.appendChild(title);

    const commentContent = document.createElement("p");
    commentContent.classList.add("comment-content");
    commentContent.textContent = `${comment.commentContent}`;
    console.log("commentContent is: ", comment.commentContent);
    commentContainer.appendChild(commentContent);

    const addedContainer = document.createElement("div");
    addedContainer.classList.add("post-date");
    const addedDate = new Date(comment.postDate);
    const options = {
      timeZone: "Europe/Oslo",
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const addedDateString = addedDate.toLocaleString("en-US", options);
    addedContainer.textContent = `Posted: ${addedDateString}`;
    commentContainer.appendChild(addedContainer);
  });
};

commentName.addEventListener("input", validateCommentForm);
commentEmail.addEventListener("input", validateCommentForm);
commentContent.addEventListener("input", validateCommentForm);