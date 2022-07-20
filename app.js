const bottons = document.querySelectorAll(".controls");
const botton = document.querySelectorAll(".control");
const allSections = document.querySelector("body");
const section = document.querySelectorAll(".section");
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_goh836j", "template_cbw414o", this).then(
        function () {
          var status_form = document.querySelector(".successfull-submit");
          status_form.classList.add("active");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
      document.getElementById("contact-form").reset();
    });
};
function PageTransitions() {
  for (let x = 0; x < botton.length; x++) {
    botton[x].addEventListener("click", function () {
      let currentBtn = document.querySelector(".active-btn");

      var reveals = document.querySelectorAll(".reveal");
      reveals[0].classList.remove("active"); //need to add because in page transition from about to any where classList fo skill-container contain active
      currentBtn.className = currentBtn.className.replace("active-btn", "");
      this.className += " active-btn";
    });
  }
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      botton.forEach((btn) => {
        btn.classList.remove("fix_btn_active");
      });
      e.target.classList.add("fix_btn_active");

      //hide other sections
      section.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

PageTransitions();

//skill box reveal function
window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 35;
    console.log(elementTop, windowHeight);
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
