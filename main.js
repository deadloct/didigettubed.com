const results = [
    "in your dreams maybe",
    "hell yeah you did!",
    "just a head dip",
    "you were deep in the tube mate",
    "don't think so, it's ankle high out there"
];

document.addEventListener("DOMContentLoaded", e => {
    const btn = document.getElementById("send-it");
    const result = document.getElementById("result");

    btn.addEventListener("click", () => {
        result.innerHTML = results[Math.floor(Math.random()*results.length)];
    });
});
