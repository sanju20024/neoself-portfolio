document.getElementById("sendBtn").addEventListener("click", async () => {
  const input = document.getElementById("userInput");
  const chatlog = document.getElementById("chatlog");
  const message = input.value.trim();

  if (!message) return;

  // Show user message
  const userMsg = document.createElement("div");
  userMsg.className = "mb-2";
  userMsg.innerHTML = `<strong>You:</strong> ${message}`;
  chatlog.appendChild(userMsg);

  input.value = "";
  chatlog.scrollTop = chatlog.scrollHeight;

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    const botMsg = document.createElement("div");
    botMsg.className = "mb-2 text-cyan-300";
    botMsg.innerHTML = `<strong>AI:</strong> ${data.reply}`;
    chatlog.appendChild(botMsg);

    chatlog.scrollTop = chatlog.scrollHeight;
  } catch (err) {
    console.error("Error:", err);
    const errMsg = document.createElement("div");
    errMsg.className = "mb-2 text-red-400";
    errMsg.innerHTML = "<strong>AI:</strong> Error connecting to the server.";
    chatlog.appendChild(errMsg);
  }
});
