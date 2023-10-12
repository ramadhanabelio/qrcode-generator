document.getElementById("paste-icon").addEventListener("click", function () {
  // Mem-paste teks yang telah dicopy ke input
  navigator.clipboard.readText().then(function (text) {
    document.getElementById("url").value = text;
    toggleButtons(text); // Menampilkan tombol hapus jika ada teks
  });
});

document.getElementById("clear-icon").addEventListener("click", function () {
  // Menghapus teks di dalam input
  document.getElementById("url").value = "";
  toggleButtons(""); // Menampilkan tombol paste
});

// Fungsi untuk menampilkan atau menyembunyikan tombol paste dan hapus
function toggleButtons(text) {
  var pasteButton = document.getElementById("paste-icon");
  var clearButton = document.getElementById("clear-icon");

  if (text === "") {
    // Jika tidak ada teks, tampilkan tombol "Paste"
    pasteButton.style.display = "block";
    clearButton.style.display = "none";
  } else {
    // Jika ada teks, tampilkan tombol "Hapus"
    pasteButton.style.display = "none";
    clearButton.style.display = "block";
  }
}

// Menambahkan event listener untuk form submission
document.querySelector("form").addEventListener("submit", function (e) {
  // Mengosongkan input URL setelah submit
  document.getElementById("url").value = "";

  // Mengganti tombol "Trash" kembali ke tombol "Paste"
  toggleButtons("");
});
