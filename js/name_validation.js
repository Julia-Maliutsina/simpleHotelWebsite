    var formElement=document.forms.INFO;
    formElement.onclick=validateInfoForm;

    function validateInfoForm() {

        var nameElement=formElement.elements.NAME;
        var nameValue=nameElement.value;

        if ( nameValue.length>20 ) {
            alert('Your name has to contain less than 20 characters');
            nameElement.focus();
            return false;
        }

        return true;
    }
