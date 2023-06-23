import { getPosts, posts } from "./get-posts.js";

let numToShow = 10;
const loader = document.getElementById("loader");
const postsNote = document.getElementById("latest-posts-note");
const latestPostsContainer = document.getElementById("latest-posts-container");

async function fetchAndRenderPosts() {
  loader.classList.add("active");
  postsNote.classList.add("hide");
  latestPostsContainer.classList.add("hide");

  await getPosts();

  loader.classList.remove("active");
  postsNote.classList.remove("hide");
  latestPostsContainer.classList.remove("hide");

  displayPosts(numToShow);
}

async function displayPosts(numToShow) {
  const postsToShow = posts.slice(numToShow - 10, numToShow);
  const latestPostsContainer = document.getElementById("latest-posts-container");

  postsToShow.forEach((post) => {
    const postContainer = document.createElement("a");
    postContainer.href = `post-details.html?id=${post.postId}`;
    postContainer.classList.add("search-post-container");
    postContainer.classList.add("latest-post-container");
    postContainer.style.opacity = "0";
    latestPostsContainer.appendChild(postContainer);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("search-post-image-container");
    postContainer.appendChild(imageContainer);

    const image = new Image();
    image.onload = function () {
      imageContainer.style.backgroundImage = `url(${image.src})`;
    };
    image.src = post.image;

    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("search-post-details-container");
    postContainer.appendChild(detailsContainer);

    const title = document.createElement("h2");
    title.classList.add("post-title");
    title.textContent = post.title;
    detailsContainer.appendChild(title);

    const tagLine = document.createElement("p");
    tagLine.classList.add("post-tagline");
    tagLine.textContent = post.shortDescription;
    detailsContainer.appendChild(tagLine);

    const tags = document.createElement("p");
    tags.classList.add("post-tags");
    tags.textContent = `Tags: ${post.tags.join(", ")}`;
    detailsContainer.appendChild(tags);

    latestPostsContainer.appendChild(postContainer);
    setTimeout(() => {
      postContainer.style.opacity = "1";
    }, 10);
  });

  if (numToShow >= posts.length) {
    const showMoreButton = document.querySelector(".show-more-button");
    if (showMoreButton) {
      showMoreButton.remove();
    }
  } else {
    const showMoreButton = document.querySelector(".show-more-button");
    if (!showMoreButton) {
      const showMoreButton = document.createElement("button");
      showMoreButton.classList.add("show-more-button");
      showMoreButton.textContent = "Show More";
      latestPostsContainer.appendChild(showMoreButton);
      showMoreButton.addEventListener("click", () => {
        numToShow += 10;
        displayPosts(numToShow);
      });
    }
  }
}
fetchAndRenderPosts();
export { displayPosts, numToShow };
