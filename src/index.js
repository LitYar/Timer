document.addEventListener("DOMContentLoaded", function() {
    const   days = document.querySelectorAll(".days"),
            hours = document.querySelectorAll(".hours"),
            minuts = document.querySelectorAll(".minuts"),
            seconds = document.querySelectorAll(".seconds"),
            cardUp = document.querySelectorAll(".up"),
            cardDown = document.querySelectorAll(".down"),
            numUp = document.querySelectorAll(".num-up"),
            numDown = document.querySelectorAll(".num-down"),
            boxCard = document.querySelectorAll(".timer-box-card");

    
    const countDownDate = new Date("10, 5, 2022").getTime();

    let interval = setInterval(function() {
    
        const now = new Date().getTime();
    
        const distance = countDownDate - now;
    
        let d = Math.floor(distance / (1000 * 60 * 60 * 24));
        let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((distance % (1000 * 60)) / 1000);


        days.forEach(item => item.innerHTML = d);
        hours.forEach(item => item.innerHTML = h);
        minuts.forEach(item => item.innerHTML = m);
        seconds.forEach(item => item.innerHTML = s);

        if (distance <= 0) {
            clearInterval(interval);
        }

    }, 1000);

    function addRotate() {
        boxCard.forEach(item => {
            item.classList.toggle("rotate");
        });
        cardUp.forEach(i => i.classList.toggle("back"));
        cardDown.forEach(i => i.classList.toggle("front"));
        numUp.forEach(item => item.classList.toggle("numRotateUp"));
        numDown.forEach(item => item.classList.toggle("numRoteteDown"));
    } 
    setTimeout(() => {
        setInterval(function() {
            addRotate();
        }, 500);
    },500);
});