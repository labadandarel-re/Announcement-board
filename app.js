function postAnnouncement() {
    let message = document.getElementById("messageInput").value;

    if (message.trim() === "") {
        alert("Please enter a message!");
        return;
    }

    document.getElementById("outputBox").innerText = message;

    // Clear input
    document.getElementById("messageInput").value = "";
}

/* Ripple Effect */
document.getElementById("postBtn").addEventListener("click", function(e) {
    let circle = document.createElement("span");
    circle.classList.add("ripple");

    let rect = this.getBoundingClientRect();
    circle.style.left = (e.clientX - rect.left) + "px";
    circle.style.top = (e.clientY - rect.top) + "px";

    this.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 600);
});