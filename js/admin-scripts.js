// Mock database using local storage
let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

// Function to render blog posts on the homepage
function renderBlogPosts() {
  const blogPostsSection = document.getElementById("blog-posts");
  if (blogPostsSection) {
    blogPostsSection.innerHTML = ""; // Clear the posts so they are not duplicated

    blogPosts.forEach((post, index) => {
      const postElement = document.createElement("article"); // Create a new article element for each post
      postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.description}</p>
          <p>${post.content}</p>
          <a href="placeholder.html" class="read-more">Read More</a>
          <button onclick="deletePost(${index})">Delete</button>
        `;
      blogPostsSection.appendChild(postElement);
    });
  }
}

// Function to add a new post
function addPost(title, description, content) {
  blogPosts.push({ title, description, content });
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts)); // Save updated data in local storage
  renderBlogPosts();
}

// Function to delete a post
function deletePost(index) {
  blogPosts.splice(index, 1); // Delete the post at specified index
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
  renderBlogPosts();
}

// Handling form submissions
const addPostForm = document.getElementById("add-post-form");
const deletePostForm = document.getElementById("delete-post-form");

if (addPostForm) {
  addPostForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const content = document.getElementById("content").value;
    addPost(title, description, content); // Call the addPost function
    this.reset(); // Reset the form
  });
}

if (deletePostForm) {
  deletePostForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const postId = parseInt(document.getElementById("post-id").value, 10); // Get the post ID from the form
    deletePost(postId); // Call the deletePost function
  });
}

// Initial render for the index page
renderBlogPosts();
