const togglePage = document.getElementById('togglePage');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

togglePage.addEventListener('click', () => {
    page1.classList.toggle('hidden');
    page2.classList.toggle('hidden');
});

// Digital Clock Logic
const hour = document.querySelector('.hour');
const dot = document.querySelector('.dot');
const min = document.querySelector('.min');
const week = document.querySelector('.week');
let showDot = true;

function updateClock() {
    const now = new Date();
    showDot = !showDot;
    dot.style.visibility = showDot ? 'hidden' : 'visible';
    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    [...week.children].forEach((day, index) => {
        day.classList.toggle('active', index === now.getDay());
    });
}

setInterval(updateClock, 1000);
updateClock();
