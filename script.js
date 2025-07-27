const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const input = userInput.value.trim();
  if (!input) return;

  appendMessage("You", input);
  userInput.value = "";

  // Simulated AI reply
  setTimeout(() => {
    const reply = generateAIResponse(input);
    appendMessage("NeoAI", reply);
  }, 800);
}

function appendMessage(sender, message) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(input) {
  const responses = {
    "hello": "Hi there! How can I assist you today?",
    "resume": "You can find my resume linked above.",
    "github": "Check my GitHub at github.com/sanju20024",
    "default": "I'm your AI twin — ask me about skills, projects, or anything!"
  };

  input = input.toLowerCase();
  return responses[input] || responses["default"];
}

// Enter key support
userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
