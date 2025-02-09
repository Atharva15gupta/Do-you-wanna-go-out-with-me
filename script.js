document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    function moveButton() {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }
    
    function nextPage() {
        window.location.href = "yes.html";
    }

    noButton.addEventListener("mouseover", moveButton);
    yesButton.addEventListener("click", nextPage);
});
