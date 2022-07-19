const bottons = document.querySelectorAll(".controls");
const botton = document.querySelectorAll(".control");
const allSections = document.querySelector("body");
const section = document.querySelectorAll(".section");

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
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
