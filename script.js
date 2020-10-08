let articles = document.querySelectorAll(".articles-item");
let filter = document.querySelector(".articles-option");
let writeMeForm = document.querySelector('.write-me-form');
let commentField = document.querySelector('.comment-field');
let submitButton = document.querySelector('.submit-button');

filter.onchange = function () {
 for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all' && filter.value !== 'select') {
      article.classList.add('hidden');
    } else {
    	article.classList.remove('hidden');
    }
  }
};

commentField.oninput = function () {
	if (commentField.value.length < 10 || commentField.value.length > 200) {
		writeMeForm.classList.add('warning');
		submitButton.disabled = true;
	} else {
		writeMeForm.classList.remove('warning');
		submitButton.disabled = false;
	}
	}

