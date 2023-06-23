import { validateContactForm } from "./validate-contact-form.js";
const contactForm = document.getElementById("contact-form");
const sendMessageButton = document.getElementById("send-message");
const contactName = document.getElementById("name-input");
const contactNameError = document.getElementById("name-input-error");
const contactEmail = document.getElementById("email-input");
const contactEmailError = document.getElementById("email-input-error");
const contactSubject = document.getElementById("subject-input");
const contactSubjectError = document.getElementById("subject-input-error");
const contactContent = document.getElementById("comment-input");
const contactContentError = document.getElementById("message-input-error");
const confirmSuccess = document.getElementById("message-sent");

contactName.addEventListener("input", validateContactForm);
contactEmail.addEventListener("input", validateContactForm);
contactSubject.addEventListener("input", validateContactForm);
contactContent.addEventListener("input", validateContactForm);