// Mock database using local storage
let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

// Function to render blog posts on the homepage
function renderBlogPosts() {
  const blogPostsSection = document.getElementById("blog-posts");
  if (blogPostsSection) {
    blogPostsSection.innerHTML = ""; // Clear the posts so they are not duplicated

    blogPosts.forEach((post, index) => {
      const postElement = document.createElement("article");
      postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.description}</p>
          <p>${post.content}</p>
          <a href="placeholder.html" class="read-more">Read More</a>
        `;
      blogPostsSection.appendChild(postElement);
    });
  }
}

// Initial render for the index page
renderBlogPosts();
