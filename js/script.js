window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    // Получаємо доступ до елементів HTML
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    // Функція яка скриває контент
    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);
    // Функція яка показує контент
    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }

    }
    // івент який запускає цикл, який провіряє дію натискання на певну секцію і виводить інформацію саме по ній.
    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    // TIMER

    let deadLine = '2020-04-18';

    function getTimeRemaining(endtime){
        let total = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((total/1000) % 60),
        minutes = Math.floor((total/1000/60) % 60),
        hours = Math.floor((total/(1000*60*60)));

        return {total, hours, minutes, seconds};
    }

    function setClock(endTime){
        let hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            timerInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            function addZero(num){
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            
            if (t.total <= 0){
                clearInterval(timerInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock(deadLine);

});