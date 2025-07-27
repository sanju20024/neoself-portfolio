// Load Particles.js
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('particles.js config loaded');
});

// Chat Assistant Logic
function sendMessage() {
  const input = document.getElementById('userInput');
  const chatLog = document.getElementById('chatLog');
  const message = input.value.trim();

  if (message !== '') {
    // Add user's message
    const userMsg = document.createElement('div');
    userMsg.innerHTML = `<strong>You:</strong> ${message}`;
    chatLog.appendChild(userMsg);

    // Add simple bot reply (replace this with actual AI logic if needed)
    const botReply = document.createElement('div');
    botReply.innerHTML = `<strong>AI:</strong> Hello! I'm still learning. Stay tuned!`;
    setTimeout(() => chatLog.appendChild(botReply), 500);

    input.value = '';
    chatLog.scrollTop = chatLog.scrollHeight;
  }
}
