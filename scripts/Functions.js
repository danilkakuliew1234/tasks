function CheckInput(inputa, inputb, inputc){
    if(inputa.value != '')
        inputa.classList.add("is-valid");
    else
        inputa.classList.remove('is-valid');

    try
    {
        if(inputb.value != '')
            inputb.classList.add("is-valid");
        else
            inputb.classList.remove('is-valid');
    } catch
    {
        //no second input
    }
    try
    {
        if(inputc.value != '')
            inputc.classList.add("is-valid");
        else
            inputc.classList.remove('is-valid');
    } catch
    {
        //no three input
    }
}