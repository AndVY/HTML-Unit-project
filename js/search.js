const searchForm = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');

searchButton.addEventListener('click', function (e) {
    if (!searchForm.classList.contains('search--visible')) {
        e.preventDefault();
        // stops page reloading by pressing button inside form when input is still invisible
        searchForm.classList.add('search--visible');
    };
});