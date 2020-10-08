let commentsField = document.querySelector('.comment-field');
let submitButton = document.querySelector('.comment-submit-button');
let formRightColumn = document.querySelector('.form-right-column');

commentsField.oninput = function () {
	if (commentsField.value.length < 10 || commentsField.value.length > 200) {
		formRightColumn.classList.add('warning');
		submitButton.disabled = true;
	} else {
		formRightColumn.classList.remove('warning');
		submitButton.disabled = false;
	}
	};