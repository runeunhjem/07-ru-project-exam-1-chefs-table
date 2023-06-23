import { getComments, comments } from "./add-comment.js";
console.log("make comments is: ", comments);
await getComments();
console.log("comments after getComments is: ", comments);
const commentsContainer = document.getElementById("user-comments");

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
addedContainer.classList.add("detail-added");
const addedDate = new Date(post.date);
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
  addedContainer.textContent = `Added: ${addedDateString}`;
  categoryContainer.appendChild(addedContainer);
});