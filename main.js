
"use strict";
const body = document.querySelector("body");

// thresholds for X and Y
let xt = 0;
let yt = 0;
// How long does it take to generate another spark
// the bigger the number, the less sparks occur
let steps = 100;
// colors for the sparks
const colors =
[
    "rgb(254, 52, 208)",
    "rgb(90, 242, 137)",
    "rgb(207, 137, 79)",
    "rgb(113, 162, 235)",
    "rgb(190, 224, 97)",
];

window
.addEventListener("pointermove", ({clientX: cx, clientY: cy}) => {
    if(cx - steps >= xt) {
            makeStar(cx, cy);
            xt = cx;
        }
    else if(cx + steps < xt) {
            makeStar(cx, cy);
            xt = cx;
        }
    else {
        if(cy - steps >= yt) {
            makeStar(cx, cy);
            yt = cy;
        }
        else if(cy + steps < yt) {
            makeStar(cx, cy);
            yt = cy;
        }
    }
});

/** Generates a new spark on the current mouse position
 * @param {number} x 
 * @param {number} y  */
function makeStar(x, y) {
    let holder = document.createElement("div");
    holder.classList.add("holder");
    holder.style.top = `${y}px`;
    holder.style.left = `${x}px`;
    const circle = document.createElement("div");
    circle.classList.add("circle");
    let randomColor =
    colors[randomIntegerBetween(colors.length - 1, 0)];
    circle.style.backgroundColor = randomColor;
    circle.style.boxShadow = `0 0 10px 4px ${randomColor}`;
    holder.append(circle);
    body.append(holder);
    setTimeout(() => {
        holder.remove();
    }, 1500);
}
/** Generates a random number to pick a color from
 *  the "colors" -Array
 * @param {´number} max 
 * @param {number} min 
 * @returns number */
function randomIntegerBetween(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}