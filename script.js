document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  // Handle Enter key
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  // Handle click on Send button
  sendBtn.addEventListener("click", () => {
    sendMessage();
  });

  function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage("user", message);
    userInput.value = "";

    setTimeout(() => {
      const response = generateAIResponse(message);
      appendMessage("ai", response);
    }, 600); // simulate response delay
  }

  function appendMessage(sender, message) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("chat-message", sender);
    msgDiv.innerText = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function generateAIResponse(input) {
    // Simple static responses for now
    const responses = {
      hello: "Hi there! How can I assist you with your portfolio?",
      help: "Sure! I can help you with your resume, projects, GitHub links, or anything else related to your profile.",
      github: "Here’s your GitHub: https://github.com/yourusername",
      resume: "You can download your resume from the top section of this page.",
      thanks: "You're welcome! 😊",
    };

    input = input.toLowerCase();

    for (let keyword in responses) {
      if (input.includes(keyword)) {
        return responses[keyword];
      }
    }

    return "Sorry, I didn’t quite get that. Can you please rephrase?";
  }
});
