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
  const title = document.createElement("h4");
  title.classList.add("comment-title");
  title.textContent = `${comment.commentName} posted:`;
  console.log("commentName is: ", comment.commentName);
  commentContainer.appendChild(title);
});