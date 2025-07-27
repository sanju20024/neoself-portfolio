document.addEventListener("DOMContentLoaded", function () {
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatContainer = document.getElementById("chat-container");

  sendBtn.addEventListener("click", sendMessage);
  userInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  async function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    addMessage("user", message);
    userInput.value = "";

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      addMessage("ai", data.reply || "No response from AI.");
    } catch (error) {
      console.error("Fetch error:", error);
      addMessage("ai", "Error contacting AI.");
    }
  }

  function addMessage(role, text) {
    const messageDiv = document.createElement("div");
    messageDiv.className = role;
    messageDiv.innerText = text;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
});
