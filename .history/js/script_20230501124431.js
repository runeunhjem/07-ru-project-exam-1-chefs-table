import { getPosts, posts } from "./posts.js";

(async function () {
  await getPosts();
  console.log("posts is: ", posts);

  const carousel = document.getElementById("carousel-home");

  for (const post of posts) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post-container");

    const container = document.createElement("div");
    container.classList.add("post-image-container");
    postContainer.appendChild(container);

    const image = new Image();
    image.onload = function () {
      container.style.backgroundImage = `url(${image.src})`;
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
    const dateString = `${date.toLocaleString("default", { month: "short" })} ${date.getDate()}, ${date.getFullYear()}`;
    const added = document.createElement("p");
    added.classList.add("post-added");

    added.textContent = `Added: ${dateString}`;
    postContainer.appendChild(added);


    // const categories = document.createElement("p");
    // categories.textContent = `Categories: ${post.categories.join(", ")}`;
    // postContainer.appendChild(categories);


    // const instructions = document.createElement("div");
    // instructions.innerHTML = post.instructions;
    // postContainer.appendChild(instructions);

    // const recipe = document.createElement("div");
    // recipe.innerHTML = post.recipe;
    // postContainer.appendChild(recipe);

    carousel.appendChild(postContainer);
  }
})();

