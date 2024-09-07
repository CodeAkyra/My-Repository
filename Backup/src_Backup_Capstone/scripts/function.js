// para mag load yung html sa iframe "contentIframe"
function loadHTML(htmlFile) {
    document.getElementById('contentIframe').src = htmlFile;
}

// Handle the modal in index.html
var modal = document.getElementById("create-return-modal");
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Close the modal when the 'x' is clicked
span.onclick = function () {
    modal.style.display = "none";
};

// Close the modal when clicking outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

window.addEventListener('message', function (event) {
    if (event.data === 'openModal') {
        openModal();
    } else if (event.data === 'resetIframe') {
        document.getElementById('contentIframe').src = '';
    } else if (event.data === 'create-request-btn') {
        document.getElementById('contentIframe').src = '../main/production/Forms/create-request-material.html';
        closeModal(); // Close modal after loading content into iframe
    } else if (event.data === 'cancel-requestBtn') {
        document.getElementById('contentIframe').src = '../main/production/request-material.html';
        closeModal();
    } else if (event.data === 'excessBtn') {
        document.getElementById('contentIframe').src = '../main/production/Forms/create-return-excess.html';
        closeModal(); 
    } else if (event.data === 'defectiveBtn') {
        document.getElementById('contentIframe').src = '../main/production/Forms/create-return-defective.html';
        closeModal();
    }
});

// para mag close yung modal ng kusa pag pumindot ng button sa loob ng modal
function closeModal() {
    modal.style.display = "none";
}


// Para toh sa mga modals namay button and mag open ng another html

// Excess Button EventListener
document.getElementById('excessBtn').addEventListener('click', function () {
    parent.postMessage('excessBtn', '*');
});

// Defective Button EventListener
document.getElementById('defectiveBtn').addEventListener('click', function () {
    parent.postMessage('defectiveBtn', '*');
});