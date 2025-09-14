const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const messageDiv = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  messageDiv.textContent = "🎉 Ta-da! I love you so much! 💖";
  messageDiv.classList.remove("hidden");
});

noBtn.addEventListener("click", () => {
  messageDiv.textContent = "Aww... but I made it with love 😢";
  messageDiv.classList.remove("hidden");
});