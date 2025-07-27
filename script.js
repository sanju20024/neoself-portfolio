
// Select elements
const chatBox = document.getElementById("chat-box");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");

// Simulate AI response delay
function simulateTyping(responseText) {
  const typingIndicator = document.createElement("div");
  typingIndicator.className = "typing";
  typingIndicator.textContent = "AI is typing...";
  chatMessages.appendChild(typingIndicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  setTimeout(() => {
    typingIndicator.remove();
    appendMessage("ai", responseText);
  }, 1200); // Simulated delay
}

// Append message to chat
function appendMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("chat-message");
  msgDiv.classList.add(sender === "user" ? "user-message" : "ai-message");
  msgDiv.textContent = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle message sending
function sendMessage() {
  const message = chatInput.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  chatInput.value = "";

  // Generate a fake AI response
  const response = generateResponse(message);
  simulateTyping(response);
}

// Sample responses (for local simulation)
function generateResponse(input) {
  const lower = input.toLowerCase();
  if (lower.includes("hello") || lower.includes("hi")) {
    return "Hello! I'm your portfolio assistant. How can I help you today?";
  } else if (lower.includes("resume")) {
    return "Sure! You can view or download my resume from the Resume section above.";
  } else if (lower.includes("project")) {
    return "I’ve worked on several projects including web development and AI. Scroll up to explore them.";
  } else {
    return "I'm still learning! Please ask me something related to my portfolio.";
  }
}

// Handle Enter key
chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
});
