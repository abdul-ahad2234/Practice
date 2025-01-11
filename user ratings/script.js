const todayfilter = document.getElementById("filter-today");
const weekfilter = document.getElementById("filter-week");
const monthfilter = document.getElementById("filter-month");
const container = document.getElementById("users-container");

function removeActiveClasss(){
    todayfilter.classList.remove("active");
    weekfilter.classList.remove("active");
    monthfilter.classList.remove("active");
}

todayfilter.addEventListener("click", () => {
    removeActiveClasss();
    todayfilter.classList.add("active");
    container.style.transform = "translateX(410px)";
});

weekfilter.addEventListener("click", () => {
    removeActiveClasss();
    weekfilter.classList.add("active");
    container.style.transform = "translateX(10px)";
});

monthfilter.addEventListener("click", () => {
    removeActiveClasss();
    monthfilter.classList.add("active");
    container.style.transform = "translateX(-400px)";
});