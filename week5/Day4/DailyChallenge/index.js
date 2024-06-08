// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

   // Get the input element
   const inputElement = document.getElementById('lettersInput');

   // Add event listener for the input event
   inputElement.addEventListener('input', function(event) {
       // Get the input value
       const inputValue = event.target.value;
       // Remove any characters that are not letters using a regular expression
       const lettersOnly = inputValue.replace(/[^A-Za-z]/g, '');
       // Set the input value to only contain letters
       inputElement.value = lettersOnly;
   });