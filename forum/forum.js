function submitQuestion() {
  // Mendapatkan nilai dari input pertanyaan
  var questionText = document.getElementById("questionInput").value;

  if (questionText.trim() === "") {
    // Jika input pertanyaan kosong, tidak lakukan apa-apa
    return;
  }

  // Membuat elemen untuk pertanyaan
  var questionItem = document.createElement("div");
  questionItem.className = "question-item";

  var questionContent = document.createElement("div");
  questionContent.className = "question-content";
  questionContent.textContent = questionText;
  questionItem.appendChild(questionContent);

  // Menambahkan timestamp pada elemen pertanyaan
  var timestamp = new Date().getTime();
  questionItem.dataset.timestamp = timestamp;

  // Membuat elemen untuk bagian komentar
  var commentSection = document.createElement("div");
  commentSection.className = "comment-section";

  // Membuat elemen untuk input komentar
  var commentInput = document.createElement("textarea");
  commentInput.className = "comment-input";
  commentInput.placeholder = "Your comment...";
  commentSection.appendChild(commentInput);

  // Membuat elemen untuk tombol tambah komentar
  var submitCommentBtn = document.createElement("button");
  submitCommentBtn.className = "submit-comment-btn";
  submitCommentBtn.textContent = "Add Comment";
  submitCommentBtn.onclick = function () {
    submitComment(this);
  };
  commentSection.appendChild(submitCommentBtn);

  // Membuat elemen untuk daftar komentar
  var commentList = document.createElement("div");
  commentList.className = "comment-list";
  commentSection.appendChild(commentList);

  // Menambahkan bagian komentar ke elemen pertanyaan
  questionItem.appendChild(commentSection);

  // Menambahkan kelas .has-comments pada elemen pertanyaan
  questionItem.classList.add("has-comments");

  // Menambahkan pertanyaan ke daftar pertanyaan
  var questionList = document.getElementById("questionList");
  questionList.appendChild(questionItem);

  // Mengosongkan input setelah pertanyaan diajukan
  document.getElementById("questionInput").value = "";

  // Urutkan pertanyaan berdasarkan timestamp
  sortQuestions(questionList);

  // Periksa apakah daftar pertanyaan kosong atau tidak
  updateCommentSectionVisibility();

}

function sortQuestions(questionList) {
  var questions = Array.from(questionList.children);

  // Urutkan pertanyaan berdasarkan timestamp
  questions.sort(function (a, b) {
    var timestampA = parseInt(a.dataset.timestamp);
    var timestampB = parseInt(b.dataset.timestamp);
    return timestampB - timestampA;
  });

  // Hapus semua pertanyaan dari daftar
  questionList.innerHTML = "";

  // Tambahkan kembali pertanyaan yang sudah diurutkan
  questions.forEach(function (question) {
    questionList.appendChild(question);
  });
}

function updateCommentSectionVisibility() {
  var questionList = document.getElementById("questionList");

  if (questionList.children.length === 0) {
    // Jika daftar pertanyaan kosong, hapus semua elemen komentar
    var commentSections = document.querySelectorAll(".comment-section");
    commentSections.forEach(function (commentSection) {
      commentSection.remove();
    });
  } else {
    // Jika ada pertanyaan, tampilkan kolom komentar pada pertanyaan terbaru
    var latestQuestion = questionList.firstElementChild;
    var latestCommentSection = latestQuestion.querySelector(".comment-section");

    if (!latestCommentSection) {
      // Jika pertanyaan terbaru tidak memiliki kolom komentar, tambahkan satu
      var commentSection = document.createElement("div");
      commentSection.className = "comment-section";
      latestQuestion.appendChild(commentSection);
    }
  }
}

function submitComment(button) {
  // Mendapatkan nilai dari input komentar
  var commentText = button.parentNode.querySelector(".comment-input").value;

  if (commentText.trim() === "") {
    // Jika input komentar kosong, tidak lakukan apa-apa
    return;
  }

  // Membuat elemen untuk komentar
  var commentItem = document.createElement("div");
  commentItem.className = "comment-item";
  commentItem.textContent = commentText;

  // Menambahkan komentar ke daftar komentar pada pertanyaan terkait
  var questionItem = button.closest(".question-item");
  var commentList = questionItem.querySelector(".comment-list");
  commentList.appendChild(commentItem);

  // Mengosongkan input komentar setelah komentar diajukan
  button.parentNode.querySelector(".comment-input").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  updateCommentSectionVisibility();
});