setInterval(function(){
    CheckInput(document.querySelector('.main__input-a-c'));
}, 200)

document.querySelector('.main__button-solve-circle').onclick = function(){
    document.querySelector('.main__item-input-solve-c').value = Math.PI * 
    Math.pow(parseInt(document.querySelector('.main__input-a-c').value), 2);
}