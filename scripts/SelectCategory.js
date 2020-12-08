Select('.main__area-rectangle', '.main__area-circle', 
       '.main__select-rectangle', '.main__select-circle');
Select();


function Select(classone, classtwo, buttonone, buttontwo){
    document.querySelector(buttonone).onclick = function(){
        document.querySelector(classone).classList.toggle('hide');
    }
    document.querySelector(buttontwo).onclick = function(){
        document.querySelector(classtwo).classList.toggle('hide');
    }
}

//buttons
// .main__select-rectangle
// .main__select-circle


//Classes
//.main__area-rectangle
//.main__area-circle