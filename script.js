// Collapse/Expand Categories
document.querySelectorAll(".menu-category h2").forEach(categoryHeader => {
  categoryHeader.addEventListener("click", () => {
    const category = categoryHeader.parentElement;
    category.classList.toggle("collapsed");
  });
});

// Search Functionality
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search menu...";
searchInput.classList.add("search-box");
document.body.insertBefore(searchInput, document.body.firstChild);

searchInput.addEventListener("keyup", function () {
  const searchText = this.value.toLowerCase();
  document.querySelectorAll(".menu-item").forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(searchText) ? "flex" : "none";
  });
});
