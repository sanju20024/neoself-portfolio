// Chatbot logic
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput");
  const button = document.getElementById("sendBtn");
  const chatlog = document.getElementById("chatlog");

  function appendMessage(sender, message) {
    const msg = document.createElement("p");
    msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatlog.appendChild(msg);
    chatlog.scrollTop = chatlog.scrollHeight;
  }

  function handleInput() {
    const userText = input.value.trim();
    if (userText === "") return;

    appendMessage("You", userText);
    input.value = "";

    // AI response logic (basic dummy replies, can be extended)
    setTimeout(() => {
      let response = "Sorry, I don't understand.";
      if (userText.toLowerCase().includes("hello") || userText.toLowerCase().includes("hi")) {
        response = "Hello! How can I assist you today?";
      } else if (userText.toLowerCase().includes("portfolio")) {
        response = "This is your futuristic AI-powered digital portfolio!";
      } else if (userText.toLowerCase().includes("who are you")) {
        response = "I'm your AI assistant built right into your portfolio!";
      }
      appendMessage("AI", response);
    }, 500);
  }

  // Button click
  button.addEventListener("click", handleInput);

  // Press Enter
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleInput();
    }
  });
});

// Particle background
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#00ffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
