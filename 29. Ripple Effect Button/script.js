const btn = document.querySelector(".btn");

btn.addEventListener('click', function (e) {
    let outerX = e.clientX;
    let outerY = e.clientY;

    let buttonTop = e.target.offsetTop;
    let buttonLeft = e.target.offsetLeft;

    let innerBtn_Y = outerY - buttonTop;

    let innerBtn_X = outerX - buttonLeft;

    let circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = innerBtn_Y + "px";
    circle.style.left = innerBtn_X + "px";

    this.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 500);

})