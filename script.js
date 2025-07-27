const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Dummy response generator
function generateReply(userMessage) {
  return `You said: "${userMessage}" 🤖`;
}

// Display message in chat window
function appendMessage(message, sender = 'user') {
  const msgDiv = document.createElement('div');
  msgDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
  msgDiv.textContent = message;
  msgDiv.style.marginBottom = '10px';
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Send message handler
function handleSend() {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage(message, 'user');
  userInput.value = '';

  setTimeout(() => {
    const reply = generateReply(message);
    appendMessage(reply, 'bot');
  }, 800);
}

// Button click
sendBtn.addEventListener('click', handleSend);

// Enter key
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    handleSend();
  }
});
