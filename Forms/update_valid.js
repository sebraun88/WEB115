// Retrieve the input field element using JavaScript.
let form = document.getElementById('myForm');
let fieldInput = document.getElementById('inputField');


// Add an event listener to the form that submits an event.

form.addEventListener('submit', function(event) {
    let fieldInputValue = fieldInput.value;

    // regular expression pattern for alphanumeric input
    let regex = /^[a-zA-Z0-9]+$/

    //check if input matches regular espression 
    if (!regex.test(fieldInputValue)) {
        // display error message if invalid 
        event.preventDefault();
        fieldInput.setCustomValidity('Error. Enter letters and numbers only.')
        fieldInput.reportValidity();
    } else {
        fieldInput.setCustomValidity('');   
    }  
});

// Clear custom validity as soon as the user starts typing
fieldInput.addEventListener('input', function() {
    let regex = /^[a-zA-Z0-9]+$/;
    if (regex.test(fieldInput.value)) {
        fieldInput.setCustomValidity('');
    }
});




