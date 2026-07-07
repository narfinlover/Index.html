document.getElementById("createGroup").addEventListener("click", () => {
    alert("Create Group feature coming soon!");
});

document.getElementById("joinGroup").addEventListener("click", () => {
    alert("Join Group feature coming soon!");
});

document.getElementById("sendMessage").addEventListener("click", () => {
    const input = document.getElementById("messageInput");
    const messages = document.getElementById("messages");

    if (input.value.trim() !== "") {
        const msg = document.createElement("p");
        msg.textContent = "You: " + input.value;
        messages.appendChild(msg);
        input.value = "";
        messages.scrollTop = messages.scrollHeight;
    }
});
