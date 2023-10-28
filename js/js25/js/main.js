import { posts } from "./posts.js";

// forEach() method
// The forEach() method calls a function once for each element in an array, in order.

posts.forEach((post) => {
  console.log(post);
});
console.clear();

const filteredPosts = posts.filter((post) => {
  return post.id <= 5;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts);

const reducedPosts = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPosts);
