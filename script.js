const info = document.querySelector(".info-content");
const emailForm = document.querySelector(".email-form");
const errorEmail = document.querySelector(".error-email");

// kiểm tra định dạng mail
function validate(inputText) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (inputText.value.match(regex)) {
    document.form1.email1.focus();
    // ẩn email-form
    emailForm.style.display = "none";
    // hiện info section
    info.style.display = "block";
  } else {
    errorEmail.style.display = "block";
  }
}

//view more, view less
const job = document.querySelectorAll(".job");
const viewMore = document.querySelectorAll(".view-more");

// for (let x = 0; x < job.length; x++) {
//   job[x].addEventListener("mouseover", function () {
//     viewMore[x].style.display = "block";
//   });
//   job[x].addEventListener("mouseout", function () {
//     viewMore[x].style.display = "none";
//   });
// }

for (let i = 0; i < viewMore.length; i++) {
  // ẩn hiện view more, view less
  job[i].addEventListener("mouseover", function () {
    viewMore[i].style.display = "block";
  });
  job[i].addEventListener("mouseout", function () {
    viewMore[i].style.display = "none";
  });
  // ẩn hiện content
  viewMore[i].addEventListener("click", function () {
    job[i].classList.toggle("active");
  });
}
