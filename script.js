document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");
  const chatlog = document.getElementById("chatlog");

  // Scroll chatlog to bottom
  function scrollToBottom() {
    chatlog.scrollTop = chatlog.scrollHeight;
  }

  // Typing animation
  function typeMessage(message, className) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", className);
    chatlog.appendChild(msgDiv);

    let i = 0;
    function type() {
      if (i < message.length) {
        msgDiv.textContent += message.charAt(i);
        i++;
        setTimeout(type, 20); // Typing speed
        scrollToBottom();
      }
    }
    type();
  }

  // Simulate AI reply
  function getAIReply(userText) {
    // Simple example, you can replace this with real AI integration
    const replies = {
      hello: "Hi there! How can I assist you today?",
      help: "Sure! I can help you with your portfolio or web development questions.",
      portfolio: "You're working on a futuristic portfolio. I love it!",
    };

    const lowerText = userText.toLowerCase();
    for (let key in replies) {
      if (lowerText.includes(key)) {
        return replies[key];
      }
    }
    return "That's interesting! Tell me more.";
  }

  // Send message
  function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    typeMessage(text, "user");
    userInput.value = "";

    setTimeout(() => {
      const aiReply = getAIReply(text);
      typeMessage(aiReply, "bot");
    }, 600);
  }

  // Event listeners
  sendBtn.addEventListener("click", sendMessage);

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});
