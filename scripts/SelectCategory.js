Select('.main__area-rectangle', '.main__area-circle', 
       '.main__select-rectangle', '.main__select-circle');
Select('.main__volume-parallelepiped', '.main__volume-sphere', 
       '.main__select-parralelepiped-v', '.main__select-sphere-v');

function Select(classone, classtwo, buttonone, buttontwo){
    document.querySelector(buttonone).onclick = function(){
        document.querySelector(classone).classList.toggle('hide');
    }
    document.querySelector(buttontwo).onclick = function(){
        document.querySelector(classtwo).classList.toggle('hide');
    }
}