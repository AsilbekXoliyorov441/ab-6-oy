  let topbtn =document.querySelector(".top-btn");

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const closeModalBtn = document.getElementById("closeModalBtn");


openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

closeBtn.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);


window.addEventListener("scroll" , function(){
    console.log(window.scrollY);
   if(window.scrollY > 100){topbtn.classList.remove("hidden");}
else{topbtn.classList.add("hidden")}})