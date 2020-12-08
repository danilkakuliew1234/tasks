setInterval(function(){
    CheckInput(document.querySelector('.main__input-a-v-s'));
}, 200)

document.querySelector('.main__button-solve-volume-s').onclick = function(){
    document.querySelector('.main__item-input-solve-volume-s').value = (4 / 3) * Math.PI
     * Math.pow(parseInt(document.querySelector('.main__input-a-v-s').value), 3);
}