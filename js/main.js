let dropdownButton = document.querySelector(".drop-btn");
let navigation = document.getElementById("navigation");

dropdownButton.addEventListener("click", openContent);

function openContent() {
  navigation.classList.toggle("navigation-list");
  navigation.classList.toggle("dropdown-content");
  // navList.style.display = "block";
}

window.addEventListener("resize", closeContent);

function closeContent() {
  if (window.screen.width > 675) {
    navigation.classList.remove("dropdown-content");
    navigation.classList.add("navigation-list");
  }
}
