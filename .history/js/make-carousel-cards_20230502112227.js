import { getPosts, posts } from "./get-posts.js";

(async function () {
  await getPosts();
  console.log("posts is: ", posts);

  const carousel = document.getElementById("carousel-home");


  for (const post of posts) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post-container");

    const leftButton = document.querySelector(".carousel-left");
    const rightButton = document.querySelector(".carousel-right");
    const cardWidth = 298; // adjust to match your card width
    let currentPosition = 0;

    leftButton.addEventListener("click", () => {
      if (currentPosition > 0) {
        currentPosition--;
        postContainer.style.transform = `translateX(-${currentPosition * cardWidth * 4}px)`;
      }
    });

    rightButton.addEventListener("click", () => {
      const maxPosition = Math.ceil((posts.length - 4) / 4);
      if (currentPosition < maxPosition) {
        currentPosition++;
        postContainer.style.transform = `translateX(-${currentPosition * cardWidth * 4}px)`;
      }
    });

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("post-image-container");
    postContainer.appendChild(imageContainer);

    const image = new Image();
    image.onload = function () {
      imageContainer.style.backgroundImage = `url(${image.src})`;
    };
    image.src = post.image;

    const title = document.createElement("h2");
    title.classList.add("post-title");
    title.textContent = post.title;
    postContainer.appendChild(title);

    const tagLine = document.createElement("p");
    tagLine.classList.add("post-tagline");
    tagLine.textContent = post.shortDescription;
    postContainer.appendChild(tagLine);

    const tags = document.createElement("p");
    tags.classList.add("post-tags");
    tags.textContent = `Tags: ${post.tags.join(", ")}`;
    postContainer.appendChild(tags);

    const date = new Date(post.date);
    const dateString = `${date.toLocaleString("en-us", { month: "short" })} ${date.getDate()}, ${date.getFullYear()}`;
    const added = document.createElement("p");
    added.classList.add("post-added");
    added.textContent = `Modified: ${dateString}`;
    postContainer.appendChild(added);

    carousel.appendChild(postContainer);
  };

})();

