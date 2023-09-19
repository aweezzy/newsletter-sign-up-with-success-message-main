
/* This function clears the error class when the page has just been loaded */
function clearErrors() {   
    error = document.getElementsByClassName('error'); 
    for (let item of error){
        item.innerHTML = '';
    }
}

    function setErrorMessage(id, ErrorMessage){
    element = document.getElementById(id);
    element.getElementsByClassName("error")[0].innerHTML = ErrorMessage;
}


function formValidation(){
    var returnval = true;
    clearErrors();
     

    var email = document.forms['PracticeForm']['femail'].value;
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)){
        setErrorMessage('formEmail', "Valid email required");
        returnval = false;
    } 
    else if(email.match(validRegex)){
        
    }
    console.log(document.getElementsByClassName('personal-email'));
    document.getElementsByClassName('personal-email').innerHTML = document.forms['PracticeForm']['femail'].value;

    return returnval; 
    
}
















