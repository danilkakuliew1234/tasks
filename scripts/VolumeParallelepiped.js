setInterval(function(){
    CheckInput(document.querySelector('.main__input-a-v'),
               document.querySelector('.main__input-b-v'),
               document.querySelector('.main__input-c-v'));
}, 200)

document.querySelector('.main__button-solve-volume').onclick = function(){
    document.querySelector('.main__item-input-solve-volume').value = parseInt(document.querySelector('.main__input-a-v').value) * 
    parseInt(document.querySelector('.main__input-b-v').value) * parseInt(document.querySelector('.main__input-c-v').value);
}