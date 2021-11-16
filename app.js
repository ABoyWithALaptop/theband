var buyTickets = document.querySelectorAll(".place .btn");
var model = document.querySelector(".model");
for (const btn of buyTickets) {
btn.addEventListener("click", (e) => {
    e.preventDefault();
    model.classList.add("open");
});
}
var closeBtn = document.querySelector(".model .model-container .model-close")
closeBtn.addEventListener("click", ()=>{
    model.classList.remove("open")
})
model.addEventListener("click",(e)=>{
    e.stopPropagation();
    model.classList.remove("open")
})