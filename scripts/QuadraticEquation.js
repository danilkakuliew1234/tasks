infoFromInputs = {
    x1__input: document.querySelector('.main__item-input-solve-x1'),
    x2__input: document.querySelector('.main__item-input-solve-x2'),
    main__inputa: document.querySelector('.main__input-a'),
    main__inputb: document.querySelector('.main__input-b'),
    main__inputc: document.querySelector('.main__input-c'),
}

setInterval(function(){
    CheckInput(infoFromInputs.main__inputa, infoFromInputs.main__inputb,
         infoFromInputs.main__inputc);
    SolveQuadratic();
}, 200)

function SolveQuadratic(){
    document.querySelector('.main__button-solve').onclick = function(){
        if(infoFromInputs.main__inputa.value != '' || infoFromInputs.main__inputb.value != '' || infoFromInputs.main__inputc.value != ''){
            let discriminant = Math.pow(parseInt(infoFromInputs.main__inputb.value), 2) - 4 * 
            parseInt(infoFromInputs.main__inputa.value) * parseInt(infoFromInputs.main__inputc.value);
            if(discriminant < 0){
                infoFromInputs.x1__input.classList.add('is-invalid');
                infoFromInputs.x1__input.value = "Корней нет";
                infoFromInputs.x2__input.style = "display: none";
            } else if(discriminant == 0){
                infoFromInputs.x1__input.value = (-parseInt(main__inputb.value) + Math.sqrt(discriminant)) / 
                (2 * parseInt(main__inputa.value));
                infoFromInputs.x2__input.style = "display: none";      
            } else {
                infoFromInputs.x1__input.classList.remove('is-invalid');
                infoFromInputs.x2__input.style = "display: block";
                infoFromInputs.x1__input.value = (-parseInt(infoFromInputs.main__inputb.value) + Math.sqrt(discriminant)) / 
                (2 * parseInt(infoFromInputs.main__inputa.value));
                infoFromInputs.x2__input.value = (-parseInt(infoFromInputs.main__inputb.value) - Math.sqrt(discriminant)) / 
                (2 * parseInt(infoFromInputs.main__inputa.value));
            }
        }
    }
}