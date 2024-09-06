function setActiveButton(buttonClass) {
    document.querySelectorAll(`.${buttonClass}`).forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons in this group
            document.querySelectorAll(`.${buttonClass}`).forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            this.classList.add('active');
        });
    });
}

// Apply the function to each button group
setActiveButton('dropdown-link');
setActiveButton('module-name');
setActiveButton('module-grp');


