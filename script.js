const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  // Display user message
  const userDiv = document.createElement("div");
  userDiv.innerHTML = `<strong>You:</strong> ${message}`;
  chatBox.appendChild(userDiv);

  // Dummy AI response
  const aiDiv = document.createElement("div");
  setTimeout(() => {
    aiDiv.innerHTML = `<strong>NeoSelf:</strong> That's interesting! I'm still learning. 😊`;
    chatBox.appendChild(aiDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 700);

  userInput.value = "";
}
