function randomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomPos = Math.floor(Math.random() * 16);
        color += hex[randomPos]
    }
    return color;
}

let intervalID = null;
const startChangingColor = function () {
    if (!intervalID) {
        intervalID = setInterval(() => {
            document.querySelector("body").style.backgroundColor = randomColor();
        }, 1000);
    }
}
const stopChangingColor = function () {
    clearInterval(intervalID);
    intervalID = null;
}
document.querySelector("#start").addEventListener("click", () => {
    startChangingColor();
});
document.querySelector("#stop").addEventListener("click", () => {
    stopChangingColor();
});