// Collapse/Expand Categories
document.querySelectorAll(".menu-category h2").forEach(categoryHeader => {
  categoryHeader.addEventListener("click", () => {
    const category = categoryHeader.parentElement;
    category.classList.toggle("collapsed");
  });
});

function showCategory(categoryId) {
    let categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => {
        cat.classList.add('hidden');
    });
    document.getElementById(categoryId).classList.remove('hidden');
// Toggle category visibility
function toggleCategory(element) {
  const items = element.nextElementSibling;
  items.style.display = (items.style.display === "block") ? "none" : "block";
}
