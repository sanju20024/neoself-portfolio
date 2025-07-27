function sendMessage() {
  const input = document.getElementById("chat-input");
  const output = document.getElementById("chat-output");

  if (input.value.trim() === "") return;

  const userMsg = document.createElement("div");
  userMsg.textContent = "👤 You: " + input.value;
  output.appendChild(userMsg);

  const aiMsg = document.createElement("div");
  aiMsg.textContent = "🤖 AI: I received your message: " + input.value;
  output.appendChild(aiMsg);

  input.value = "";
  output.scrollTop = output.scrollHeight;
}
