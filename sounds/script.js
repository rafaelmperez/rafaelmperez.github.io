const sound = document.getElementById("menu-sound");
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    sound.currentTime = 0; 
    sound.play();
  });
});
