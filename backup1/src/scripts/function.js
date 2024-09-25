
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
    }

    /** CREATE REQUEST BUTTON */
    else if (event.data === 'openCreateRequest') {
        document.getElementById('contentIframe').src = '../main/production/forms/create-request-material.html';
    }

    /** CANCEL - DISCARD */
    else if (event.data === 'cancel-requestBtn') {
        document.getElementById('contentIframe').src = '../main/production/request-material.html';
    } else if (event.data === 'discard-editBtn') {
        document.getElementById('contentIframe').src = '../main/production/request-material.html';
    } else if (event.data === 'cancel-returnBtn') {
        document.getElementById('contentIframe').src = '../main/production/request-return.html';
    } else if (event.data === 'ReturnBtn') {
        document.getElementById('contentIframe').src = '../main/production/request-return.html';
    } else if (event.data === 'DiscardBtn') {
        document.getElementById('contentIframe').src = '../main/production/request-return.html';
    }

    /** REQUEST MATERIAL */
    else if (event.data === 'excessBtn') {
        document.getElementById('contentIframe').src = '../main/production/forms/create-return-excess.html';
        closeModal(); // Nasa loob kasi siya ng modal, kaya need ng closeModal(); para i-close yung modal
    } else if (event.data === 'defectiveBtn') {
        document.getElementById('contentIframe').src = '../main/production/forms/create-return-defective.html';
        closeModal();
    }

    /* EDIT BUTTON */
    else if (event.data === 'edit-requestBtn') {
        document.getElementById('contentIframe').src = '../main/production/forms/edit-request-material.html';
    }

    /* View Pending Request Return */
    else if (event.data === 'updateExcPending') {
        document.getElementById('contentIframe').src = '../main/production/forms/update-excess.html';
    } else if (event.data === 'updateDefPending') {
        document.getElementById('contentIframe').src = '../main/production/forms/update-defective.html';
    }

    /* View In-Process for Request Return */
    else if (event.data === 'viewInProcessExc') {
        document.getElementById('contentIframe').src = '../main/production/forms/view-inprocess-excess.html';
    } else if (event.data === 'viewInProcessDef') {
        document.getElementById('contentIframe').src = '../main/production/forms/view-inprocess-defective.html';
    }

    /* View Complete Request Return */
    else if (event.data === 'viewCompleteExc') {
        document.getElementById('contentIframe').src = '../main/production/forms/view-completed-excess.html';
    } else if (event.data === 'viewCompleteDef') {
        document.getElementById('contentIframe').src = '../main/production/forms/view-completed-defective.html';
    }


});