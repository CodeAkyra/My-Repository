
/** MODULE LINKS */

/** DROPDOWN BEHAVIOR */
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.module-grp');
    const content = document.querySelector('.main-content')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const dropdown = button.nextElementSibling;
            if (dropdown && dropdown.classList.contains('dropdown')) {
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

                buttons.forEach(btn => {
                    if (btn !== button) {
                        btn.classList.remove('active');
                        const otherDropdown = btn.nextElementSibling;
                        if (otherDropdown && otherDropdown.classList.contains('dropdown')) {
                            otherDropdown.style.display = 'none';
                        }
                    }
                });
                button.classList.toggle('active');
            }
        });
    });

    /** FOR DROPDOWN LINKS */
    /* HINDI GUMAGANA BUTTONS KAPAG NAKA ACTIVATE YUNG SCRIPT NA TOH

    document.querySelectorAll('.dropdown-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');
            if (url === "#") {
                const contentId = link.getAttribute('data-content');
                fetch(`${contentId}.html`)
                    .then(response => response.text())
                    .then(html => {
                        content.innerHTML = html;
                    })
                    .catch(err => console.error('Error loading content:', err));
            } else {
                fetch(url)
                    .then(response => response.text())
                    .then(html => {
                        content.innerHTML = html;
                    })
                    .catch(err => console.error('Error loading content:', err));
            }
        });
    });
    
    */

    /** FOR MODULE LINKS */
    /*
    document.querySelectorAll('.module-name').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const contentId = button.getAttribute('data-content');
            fetch(`${contentId}.html`)
                .then(response => response.text())
                .then(html => {
                    const content = document.getElementById('main-content');
                    content.innerHTML = html;
                })
                .catch(err => console.error('Error loading content:', err));
        });
    });
    */


});

/* Load Create Request for request-material.html*/

function loadCreateRequest() {
    fetch('production/Forms/create-request-material.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.main-content').innerHTML = html;
        })
        .catch(err => console.error('Error loading content:', err));
}

function loadCancelRequestMaterial() {
    fetch('production/request-material.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.main-content').innerHTML = html;
        })
        .catch(err => console.error('Error loading content:', err));
}

function loadEditRequetMaterialButton() {
    fetch('production/Forms/edit-request-material.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('.main-content').innerHTML = html;
        })
        .catch(err => console.error('Error loading content:', err));
}