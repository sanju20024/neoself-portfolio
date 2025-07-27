// AI Assistant Logic
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatlog = document.getElementById("chatlog");

sendBtn.addEventListener("click", handleChat);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") handleChat();
});

function handleChat() {
  const message = userInput.value.trim();
  if (!message) return;

  // Append user's message
  appendMessage("You", message, "right");

  // Dummy AI response logic (can replace with OpenAI API or custom logic)
  const response = generateBotResponse(message);
  setTimeout(() => {
    appendMessage("AI", response, "left");
  }, 500);

  userInput.value = "";
}

function appendMessage(sender, text, align) {
  const msg = document.createElement("div");
  msg.className = `text-${align === "right" ? "right" : "left"} my-1`;
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatlog.appendChild(msg);
  chatlog.scrollTop = chatlog.scrollHeight;
}

function generateBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("your name")) return "I'm your AI Twin Assistant! 🤖";
  if (input.includes("projects")) return "I can tell you about Sanjay's projects like the Real-Time Weather Dashboard or Deepfake Detection!";
  if (input.includes("skills")) return "Sanjay knows HTML, CSS, JavaScript, AI/ML, and more!";
  if (input.includes("hi") || input.includes("hello")) return "Hello! 👋 How can I assist you?";
  
  return "I'm still learning! Please ask about projects, skills, or say hi! 😊";
}
