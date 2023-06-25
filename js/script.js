// const opened = document.getElementById("open");
// const responsiveNav = document.querySelector(".responsive_navbar");
// const closed = document.getElementById("cancel")

// const scrollDownAnimation = [{ height: "0%" }, { height: "100%" }];
// const timing = [{ duration: 2000 }, { iteration: 1 }];

// opened.addEventListener("click", () => {
//   responsiveNav.classList.add("open");
//   opened.classList.add('go')
//   closed.classList.add('show')
// });

// closed.addEventListener('click', () => {
//     responsiveNav.classList.remove('open')
//     opened.classList.remove('go')
//     closed.classList.remove('show')
// })

const headerBg = () =>{
  const header = document.querySelector(".js-header")

  window.addEventListener("scroll", function() {
    if(this.scrollY>0){
      header.classList.add("bg-reveal");
    }else{
      header.classList.remove("bg-reveal");
    }
  })
}
headerBg();