document.getElementById("paste-icon").addEventListener("click", function () {
  navigator.clipboard.readText().then(function (text) {
    document.getElementById("url").value = text;
    toggleButtons(text);
  });
});

document.getElementById("clear-icon").addEventListener("click", function () {
  document.getElementById("url").value = "";
  toggleButtons("");
});

function toggleButtons(text) {
  var pasteButton = document.getElementById("paste-icon");
  var clearButton = document.getElementById("clear-icon");

  if (text === "") {
    pasteButton.style.display = "block";
    clearButton.style.display = "none";
  } else {
    pasteButton.style.display = "none";
    clearButton.style.display = "block";
  }
}

document.querySelector("form").addEventListener("submit", function (e) {
  document.getElementById("url").value = "";

  toggleButtons("");
});

function resetForm() {
  document.getElementById("url").value = "";
}
