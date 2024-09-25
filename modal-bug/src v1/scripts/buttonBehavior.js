/*

Next time nalang ayusin

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


*/

// Wala muna toh sa ngayon.. Purpose ng script na toh is kada click ng module, nag sstick yung hover color niya..
// Indicating na yun yung module na currently naka bukas..
// Kaso medyo nag bubug, hindi siya nag u-unhover kapag cliniclick yung dropdown-link, module-name, module-grp.
// nag uunhover lang yung button kapag same sila ng class.
