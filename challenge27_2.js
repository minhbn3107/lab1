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

async function loadAll(imgArr) {
    try {
        let imgs = imgArr.map(async (imgPath) => await createImage(imgPath));
        console.log(imgs);
        let imgElements = await Promise.all(imgs);
        console.log(imgElements);
        imgElements.forEach(async (img) => {
            await wait(2);
            img.classList.add("parallel");
        });
    } catch (error) {
        console.error(error);
    }
}
loadAll(["img/image.png", "img/image1.jpg"]);
