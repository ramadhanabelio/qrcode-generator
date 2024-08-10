document.addEventListener("DOMContentLoaded", function () {
  const urlInput = document.getElementById("url");
  const pasteIcon = document.getElementById("paste-icon");
  const clearIcon = document.getElementById("clear-icon");

  function toggleButtons(text) {
    if (text === "") {
      pasteIcon.style.display = "block";
      clearIcon.style.display = "none";
    } else {
      pasteIcon.style.display = "none";
      clearIcon.style.display = "block";
    }
  }

  function resetForm() {
    urlInput.value = "";
    toggleButtons("");
  }

  pasteIcon.addEventListener("click", async function () {
    try {
      const text = await navigator.clipboard.readText();
      urlInput.value = text;
      toggleButtons(text);
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  });

  clearIcon.addEventListener("click", function () {
    resetForm();
  });

  urlInput.addEventListener("input", function () {
    toggleButtons(urlInput.value);
  });

  document.getElementById("qr-form").addEventListener("submit", function () {
    setTimeout(resetForm, 100);
  });

  window.onload = function () {
    resetForm();
  };

  toggleButtons(urlInput.value);
});
