let commentForm = document.querySelector('.comments-form');
let commentsList = document.querySelector('.comments-list');
let commentField = document.querySelector('.comment-field');
let commentName = document.querySelector('.comment-name');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();
  let newComment = document.createElement('li');
  newComment.classList.add('comments-item');
  let newUser = document.createElement('p')
  newUser.classList.add('comments-name');
  newUser.textContent = commentName.value;
  commentName.value = '';
  let commentText = document.createElement('p');
  commentText.classList.add('comments-text');
  commentText.textContent = commentField.value;
  commentField.value = '';
  	newComment.append(newUser);
  	newComment.append(commentText);
	commentsList.append(newComment);
};

