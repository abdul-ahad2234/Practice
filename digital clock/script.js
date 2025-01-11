const $ = (selector) => {
    return document.querySelector(selector);
}
const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');  
const week = $('.week'); 
let showdot = true;

function update(){
    showdot = !showdot;
    const now = new Date();

    if(showdot){
        dot.classList.add('invisible');
    } else {
        dot.classList.remove('invisible');
    }
    hour.textContent = String(now.getHours())
      .padStart(2, '0');
    min.textContent = String(now.getMinutes())
      .padStart(2, '0');

    Array
       .from(week.children)
       .forEach(
        (ele) =>{
            ele.classList.remove('active');
        }
    );
    week
    .children[now.getDay()]
    .classlist
    .add('active');   
};

setInterval(update, 500);
