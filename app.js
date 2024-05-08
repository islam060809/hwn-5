const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
function timer() {
    const doDay = new Date(2024, 05, 01);
    let timerId = null;
    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    function countdownTimer() {
        const diff = doDay - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const daysT = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hoursT = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutesT = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const secondsT= diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        days.innerHTML = daysT < 10 ? '0' + daysT : daysT;
        hours.innerHTML = hoursT < 10 ? '0' + hoursT : hoursT;
        minutes.innerHTML = minutesT < 10 ? '0' + minutesT : minutesT;
        seconds.innerHTML = secondsT < 10 ? '0' + secondsT : secondsT;
        days.dataset.title = declensionNum(daysT, ['день', 'дня', 'дней']);
        hours.dataset.title = declensionNum(hoursT, ['час', 'часа', 'часов']);
        minutes.dataset.title = declensionNum(minutesT, ['минута', 'минуты', 'минут']);
        seconds.dataset.title = declensionNum(secondsT, ['секунда', 'секунды', 'секунд']);
    }
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
};
timer()