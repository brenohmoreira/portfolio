const theme_int = document.getElementById("theme-int")

theme_int.addEventListener("click", function (event) {
    event.preventDefault();

    theme_int.classList.toggle("light");
    document.body.classList.toggle("light-theme");

    let lightImages = document.querySelectorAll(".light-img");
    let darkImages = document.querySelectorAll(".dark-img");

    lightImages.forEach(function (image) {
        image.style.display = image.style.display === "none" ? "block" : "none";
    });

    darkImages.forEach(function (image) {
        image.style.display = image.style.display === "none" ? "block" : "none";
    });
});