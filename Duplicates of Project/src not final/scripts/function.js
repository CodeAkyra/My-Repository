
// Para toh sa mga buttons para mag function included narin toh yung mga buttons sa loob ng modals
// Excess Button EventListener
document.getElementById('excessBtn').addEventListener('click', function () {
    parent.postMessage('excessBtn', '*');
});

// Defective Button EventListener
document.getElementById('defectiveBtn').addEventListener('click', function () {
    parent.postMessage('defectiveBtn', '*');
});


// Event Listener para pag click ng mga buttons, ma redirect sila dun sa html or para mag display yung html na inopen dun sa contentIFrame
// Dito ilalagay yung links ng mga buttons everytime na mag oopen ng module
window.addEventListener('message', function (event) {
    if (event.data === 'openModal') {
        openModal();
    } else if (event.data === 'resetIframe') {
        document.getElementById('contentIframe').src = '';
    } else if (event.data === 'openCreateRequest') {
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