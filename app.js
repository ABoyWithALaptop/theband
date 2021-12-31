// mở box nhập thông tin mua vé
var buyTickets = document.querySelectorAll(".place .btn");
var model = document.querySelector(".model");
for (const btn of buyTickets) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    model.classList.add("open");
  });
}
var closeBtn = document.querySelector(".model .model-container .model-close");
closeBtn.addEventListener("click", (e) => {
  model.classList.remove("open");
});
model.addEventListener("click", (e) => {
  model.classList.remove("open");
});

model.querySelector(".model-container").addEventListener("click", (e) => {
  e.stopPropagation();
});

// mở menu trên điện thoại
var menuBtn = document.querySelector("#mobile-menu-btn");
var curHeight = document.querySelector("#header").clientHeight;
menuBtn.addEventListener("click", (e) => {
  if (document.querySelector("#header").clientHeight === curHeight) {
    console.log("open");
    document.querySelector("#header").style.height = "auto";
  } else {
    console.log("close");
    document.querySelector("#header").style.height =
      curHeight.toString() + "px";
  }
});

// tự đóng menu khi click các nút trên nav
var navBtns = document.querySelectorAll("#nav>li>a");
// loop all elem
navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // check element is subnav parent
    let isParentSubNav =
      btn.nextElementSibling &&
      btn.nextElementSibling.classList.contains("subnav");

    if (!isParentSubNav) {
      document.querySelector("#header").style.height =
        curHeight.toString() + "px";
    } else {
      e.preventDefault();
    }
  });
});
