// JavaScript for handling the chat logic
document.getElementById("send-btn").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value;

    if (userInput.trim() === "") return;

    appendMessage("user-message", userInput);
    document.getElementById("user-input").value = ""; // Clear the input field

    setTimeout(() => {
        const botReply = generateBotResponse(userInput);
        appendMessage("bot-message", botReply);
    }, 500); // Simulate a small delay for bot response
}

function appendMessage(className, message) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.innerText = message;

    document.getElementById("chat-window").appendChild(messageElement);
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight; // Scroll to bottom
}

// Simple AI logic (this can be replaced with actual AI logic)
function generateBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    if (userMessage.includes("hello")) {
        return "Hi there! How can I assist you today?";
    } else if (userMessage.includes("how are you")) {
        return "I'm an AI, but I'm doing great! How about you?";
    } else if (userMessage.includes("name")) {
        return "I'm your friendly AI assistant!";
    } else if (userMessage.includes("bye")) {
        return "Goodbye! Have a nice day!";
    } else {
        return "I'm not sure how to respond to that, but I'm here to help!";
    }
}
