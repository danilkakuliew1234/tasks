setInterval(function(){
    CheckInput(document.querySelector('.main__input-a-r'), document.querySelector('.main__input-b-r'));
}, 200)

document.querySelector('.main__button-solve-rectangle').onclick = function(){
    document.querySelector('.main__item-input-solve-r').value = parseInt(document.querySelector('.main__input-a-r').value)
     * parseInt(document.querySelector('.main__input-b-r').value)
}