function tabs(){
let tab = document.querySelectorAll('.info-header-tab'),
info = document.querySelector('.info-header'),
tabContent = document.querySelectorAll('.info-tabcontent');
// Функція яка скриває контент
function hideTabContent(a){
for(let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
}
}
hideTabContent(1);

// Функція яка показує контент
function showTabContent (b){
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
}

module.exports = tabs;
