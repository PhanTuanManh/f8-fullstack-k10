const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#2c3e50",
    "#2E4052",
    "#304254",
    "#324355",
    "#374859",
    "#3E4F5F",
    "#4A5969",
    "#536270",
    "#566472",
    "#63717D",
    "#6D7985",
    "#78848E",
    "#858F99",
    "#8B959E",
    "#919AA2",
    "#949EA5",
    "#9CA4AC",
    "#A2AAB1",
    "#ABB3B9",
    "#B2B9BE",
    "#B6BDC1",
    "#BCC2C6"
];



circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();
