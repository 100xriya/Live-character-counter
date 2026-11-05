const counter = document.querySelector("#counter");
const input = document.querySelector("#text");

input.addEventListener("input", function () {
    counter.textContent = input.value.length
})