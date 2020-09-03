    
document.addEventListener("DOMContentLoaded", function() {
    let alertButton = document.getElementById('mybutton');
    let nextButton = document.getElementById('nextbutton');
    let body = document.getElementById('body');

    alertButton.addEventListener('click', function(alertFunction) {
        alert('Clicked!')
    }); 

    nextButton.addEventListener('click', function(toggleCLass) {
        body.classList.toggle('red-background');
    }); 
});
