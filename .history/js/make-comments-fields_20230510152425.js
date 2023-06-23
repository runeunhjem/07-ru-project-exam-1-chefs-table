import { getComments, comments } from "./add-comment.js";
console.log("make comments is: ", comments);
await getComments();

const commentsContainer = document.getElementById("comments-container");
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const postId = parseInt(params.get("id"));
// console.log("postId is: ", postId);
const loader = document.getElementById("loader");
loader.classList.add("active");

const post = comments.find((p) => p.postId === parseInt(postId));

const titleContainer = document.createElement("div");
titleContainer.classList.add("detail-header");
detailContainer.appendChild(titleContainer);