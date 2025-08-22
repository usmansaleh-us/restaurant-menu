const buttons = document.querySelectorAll('.category-btn');
const categories = document.querySelectorAll('.category-items');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Hide all categories first
    categories.forEach(cat => cat.classList.remove('active'));

    // Show the one linked to this button
    const target = document.getElementById(btn.dataset.target);
    target.classList.add('active');
  });
});
