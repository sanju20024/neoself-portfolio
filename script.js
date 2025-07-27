function handleChat() {
  const input = document.getElementById("user-input").value;
  const chatBox = document.getElementById("chat-box");

  if (input.trim() !== "") {
    const userMsg = `<div><strong>You:</strong> ${input}</div>`;
    const reply = `<div><strong>NeoSelf:</strong> I'm learning more about you every day!</div>`;
    chatBox.innerHTML += userMsg + reply;
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
async function fetchGitHubProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (response.ok) {
        document.getElementById("github-name").textContent = data.name || data.login;
        document.getElementById("github-bio").textContent = data.bio || "No bio available.";
        document.getElementById("github-followers").textContent = `Followers: ${data.followers}`;
        document.getElementById("github-link").href = data.html_url;
    } else {
        alert("GitHub profile not found");
    }
}

// Replace 'yourusername' with your actual GitHub username
fetchGitHubProfile("sanju20024");
