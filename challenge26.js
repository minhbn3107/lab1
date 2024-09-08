function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement("img");
        img.src = imgPath;

        img.addEventListener("load", () => {
            document.querySelector(".images").appendChild(img);
            resolve(img);
        });

        img.addEventListener("error", () => {
            reject(new Error("Image not found"));
        });
    });
}

function wait(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

let currentImg;

createImage("./img/image.png")
    .then((img) => {
        currentImg = img;
        console.log("Image 1 loaded");
        return wait(5);
    })
    .then(() => {
        currentImg.style.display = "none";
        return createImage("./img/img-2.jpg");
    })
    .then((img) => {
        currentImg = img;
        console.log("Image 2 loaded");
        return wait(5);
    })
    .then(() => {
        currentImg.style.display = "none";
    })
    .catch((err) => console.error(err));

createImage("./img/image1.jpg")
    .then((img) => {
        currentImg = img;
        console.log("Image 3 loaded");
        return wait(2);
    })
    .catch((err) => console.error(err));
