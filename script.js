document.getElementById("sendBtn").addEventListener("click", async () => {
  const input = document.getElementById("userInput");
  const chatlog = document.getElementById("chatlog");
  const message = input.value.trim();

  if (!message) return;

  // --- Display user message ---
  const userMsg = document.createElement("div");
  userMsg.className = "mb-2 text-right"; // Align user message to the right
  userMsg.innerHTML = `<span class="bg-cyan-500/30 px-3 py-1 rounded-lg"><strong>You:</strong> ${message}</span>`;
  chatlog.appendChild(userMsg);

  input.value = "";
  chatlog.scrollTop = chatlog.scrollHeight;

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // FIX: Changed 'userMessage' to 'message'
      body: JSON.stringify({ message: message }), 
    });

    if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    // --- Display bot message ---
    // FIX: Added logic to create and append the bot's response
    const botMsg = document.createElement("div");
    botMsg.className = "mb-2";
    botMsg.innerHTML = `<strong>AI:</strong> ${data.reply || "No response from AI."}`;
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
