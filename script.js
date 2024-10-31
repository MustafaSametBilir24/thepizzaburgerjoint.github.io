document.addEventListener("DOMContentLoaded", function () {
    const barbutton = document.getElementById("bar");
    const navbar = document.querySelector(".navbar");
    const searchbutton = document.getElementById("search-button");
    const searchbar = document.querySelector(".searchbar");
    
    
    barbutton.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    searchbutton.addEventListener("click", function() {
        searchbar.classList.toggle("active");
    });
});
