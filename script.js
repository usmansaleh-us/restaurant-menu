function showCategory(categoryId) {
    let categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => {
        cat.classList.add('hidden');
    });
    document.getElementById(categoryId).classList.remove('hidden');
}
