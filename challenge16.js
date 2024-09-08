(function () {
    const header = document.querySelector("h1");
    header.style.color = "red";

    // Gán sự kiện click cho body
    document.body.addEventListener("click", function () {
        header.style.color = "blue";
    });
})();
