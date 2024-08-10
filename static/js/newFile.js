document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const urlInput = form.querySelector("#url");
    const clearIcon = form.querySelector("#clear-icon");

    urlInput.value = "";
    clearIcon.style.display = "none;";

    const response = await fetch("/generate", {
      method: "POST",
      body: new FormData(form),
    });

    if (response.ok) {
      const qrCodeBlob = await response.blob();
      const qrCodeUrl = URL.createObjectURL(qrCodeBlob);

      const downloadLink = document.createElement("a");
      downloadLink.href = qrCodeUrl;
      downloadLink.download = "qr_code.png";

      downloadLink.click();
      URL.revokeObjectURL(qrCodeUrl);
    }
  });
});
