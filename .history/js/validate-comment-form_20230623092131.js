function validateCommentForm() {
  // event.preventDefault();
  const commentForm = document.getElementById("comment-form");
  const postCommentButton = document.getElementById("post-comment");
  const commentName = document.getElementById("name-input");
  const commentNameError = document.getElementById("name-input-error");
  const commentEmail = document.getElementById("email-input");
  const commentEmailError = document.getElementById("email-input-error");
  const commentContent = document.getElementById("comment-input");
  const commentContentError = document.getElementById("comment-input-error");
  const confirmSuccess = document.getElementById("comment-posted");

  commentName.addEventListener("focus", function () {
    commentName.placeholder = "Min 2 characters";
  });
  commentName.addEventListener("blur", function () {
    commentName.placeholder = "Name...";
  });
  commentEmail.addEventListener("focus", function () {
    commentEmail.placeholder = "Valid email format (john.doe@mail.com)";
  });
  commentEmail.addEventListener("blur", function () {
    commentEmail.placeholder = "Email...";
  });
  commentContent.addEventListener("focus", function () {
    commentContent.placeholder = "Min 10 characters";
  });
  commentContent.addEventListener("blur", function () {
    commentContent.placeholder = "Comment...";
  });

  function validateForm(event) {
    let formSubmitted = true;

    function validateForm(event) {
    if (checkLength(commentName.value, 1)) {
      commentNameError.style.display = "none";
      commentName.style.backgroundColor = "#8fff98";
      commentName.style.color = "#000000";
    } else {
      commentNameError.style.display = "block";
      commentName.style.backgroundColor = "#fafad2";
      commentName.style.color = "#FF0000";
    }
    if (validateEmail(commentEmail.value)) {
      commentEmailError.style.display = "none";
      commentEmail.style.backgroundColor = "#8fff98";
      commentEmail.style.color = "#000000";
    } else {
      commentEmailError.style.display = "block";
      commentEmail.style.backgroundColor = "#fafad2";
      commentEmail.style.color = "#FF0000";
    }
    if (checkLength(commentContent.value, 9)) {
      commentContentError.style.display = "none";
      commentContent.style.backgroundColor = "#8fff98";
      commentContent.style.color = "#000000";
    } else {
      commentContentError.style.display = "block";
      commentContent.style.backgroundColor = "#fafad2";
      commentContent.style.color = "#FF0000";
    }
    if (checkLength(commentName.value, 1) && validateEmail(commentEmail.value) && checkLength(commentContent.value, 9)) {
      postCommentButton.setAttribute("type", "submit");
      postCommentButton.style.cursor = "pointer";
      postCommentButton.innerText = "Post Comment";
      postCommentButton.classList.add("buttonSuccess");
      postCommentButton.addEventListener("click", successMessage);
    } else {
      postCommentButton.setAttribute("type", "button");
      postCommentButton.innerText = "Post Comment";
      postCommentButton.classList.add("send-msg-button", "buttonNotReady");
      confirmSuccess.style.display = "none";
    }
  }

  commentForm.addEventListener("submit", function (event) {
    formSubmitted = true;
    validateForm(event);
  });

  commentName.addEventListener("input", validateForm);
  commentEmail.addEventListener("input", validateForm);
  commentContent.addEventListener("input", validateForm);

  function successMessage() {
    const confirmSuccess = document.getElementById("comment-posted");
    confirmSuccess.style.display = "block";
    confirmSuccess.innerHTML = `
        <p class="success">Your message was sent successfully</p>
      `;
  }

  function checkLength(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(email) {
    const regEx = /\S+@\S+\.\S/;
    const patternMatches = regEx.test(email);
    return patternMatches;
  }
};
validateCommentForm();
export { validateCommentForm };
