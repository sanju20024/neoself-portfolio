function sendMessage(userInput) {
  fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userInput })
  })
  .then(response => response.json())
  .then(data => {
    const aiReply = data.reply;
    // Display aiReply in chat window
    console.log(aiReply);
    document.getElementById("chatlog").innerHTML += `
      <div class="glass-box">🤖 ${aiReply}</div>
    `;
  })
  .catch(error => {
    console.error("Error:", error);
  });
}
