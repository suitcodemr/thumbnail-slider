document.addEventListener("DOMContentLoaded", function (event) {
    const imageWrapper = document.querySelectorAll(".thumbnailWrapper");
    console.log(imageWrapper);

    let mainImg = document.querySelector("#mainImg");
    console.log(mainImg);

    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    const thumbnails = document.getElementById("thumbnails");

    imageWrapper.forEach((image) => {
        image.addEventListener("click", () => {
            mainImg.firstChild.nextSibling.src = `.${image.firstChild.nextSibling.src.slice(
                21
            )}`;
        });
    });

    let xValue = 0;
    prev.addEventListener("click", () => {
        if (xValue < 0 && xValue >= -1000)
            thumbnails.style.transform = `translateX(${(xValue += 250)}px)`;
        console.log(xValue);
    });
    console.log(xValue);

    next.addEventListener("click", () => {
        if (xValue <= 0 && xValue > -1000)
            thumbnails.style.transform = `translateX(${(xValue -= 250)}px)`;
        console.log(xValue);
    });
});
