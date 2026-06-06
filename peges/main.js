const darkBtn = document.querySelector(".dark-btn");
const body = document.getElementById("body");


const progressBar = document.getElementById("progressBar");
const percentText = document.getElementById("percent");
const loader = document.getElementById("loader");


darkBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    // save mode
    if(body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// page reload bo‘lganda saqlab qoladi
if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark");
}

let percent = 0;

const interval = setInterval(() => {
  percent++;

  progressBar.style.width = percent + "%";
  percentText.innerText = percent + "%";

  if (percent >= 100) {
    clearInterval(interval);

    setTimeout(() => {
      loader.classList.add("opacity-0");

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);

    }, 300);
  }
}, 50); // 10 sekund


