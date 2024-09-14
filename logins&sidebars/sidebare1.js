let barBtn = document.querySelector(".bar-btn");
fullBar = document.querySelector(".full-bar");

barBtn.addEventListener("click", ()=>{
    fullBar.classList.remove("hide");
});
