import { getPosts, posts } from "./getposts.js";
import { getComments, comments } from "./getcomments.js";

async function init() {
  await getPosts();

}
init();