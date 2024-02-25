document.getElementById("theme-int").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("theme-int").classList.toggle("light");
    document.body.classList.toggle("light-theme");

    var lightImages = document.querySelectorAll(".light-img");
    var darkImages = document.querySelectorAll(".dark-img");

    lightImages.forEach(function (image) {
        image.style.display = image.style.display === "none" ? "block" : "none";
    });

    darkImages.forEach(function (image) {
        image.style.display = image.style.display === "none" ? "block" : "none";
    });
});