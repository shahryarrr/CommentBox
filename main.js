const commentArea = document.getElementById("comment");
const countOutput = document.getElementById("character-count");
const maxCharacters = 140;
let limitExceed = false;

commentArea.addEventListener("input", () => {
let currentCount = commentArea.value.length;
countOutput.innerHTML = currentCount;
if (currentCount > maxCharacters) {
commentArea.style.border = "1px solid red";
countOutput.style.color = "red";
limitExceed = true;
} else {
commentArea.style.border = "none";
countOutput.style.color = "black";
limitExceed = false;
}
});

// FORM SUBMIT
const commentForm = document.querySelector(".comments");

commentForm.addEventListener("submit", (event) => {
event.preventDefault();
if (!limitExceed) {
const nameInput = document.getElementById("firstname").value;
const commentInput = commentArea.value;
const commentTemplate = <div class="comment-item"> <span class="name-output">${nameInput}</span> <p class="comment-output">${commentInput}</p> </div> ;
const commentOutput = document.querySelector(".all-comments");
commentOutput.innerHTML += commentTemplate;
resetForm();
}
});

function resetForm() {
document.querySelectorAll(".comments input").forEach((input) => (input.value = ""));
commentArea.value = "";