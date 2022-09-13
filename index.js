var share = document.querySelector(".img-share");
var shareBox = document.querySelector(".share");
var body = document;

share.addEventListener("click", function () {
  if (shareBox.classList.contains("hidden") === false) {
    shareBox.classList.add("hidden");
  } else {
    shareBox.classList.remove("hidden");
  }
});
