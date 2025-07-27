function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  const chatMessages = document.getElementById("chat-messages");
  const userMsg = document.createElement("div");
  userMsg.innerHTML = `<strong>You:</strong> ${message}`;
  chatMessages.appendChild(userMsg);

  const aiResponse = document.createElement("div");
  aiResponse.innerHTML = "<strong>AI:</strong> thinking...";
  chatMessages.appendChild(aiResponse);

  // Simulate AI thinking
  setTimeout(() => {
    aiResponse.innerHTML = `<strong>AI:</strong> I'm still in training. Try again later!`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);

  input.value = "";
}
