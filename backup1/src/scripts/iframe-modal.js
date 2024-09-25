// para mag load yung html sa iframe "contentIframe"
function loadHTML(htmlFile) {
    document.getElementById('contentIframe').src = htmlFile;
}

// Para mag open yung modal na may Excess Button and Defective Button sa Request Return Module
(function () {
    var modal = document.getElementById("create-return-modal");
    var span = document.getElementsByClassName("close")[0];

    // Function to open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Close the modal when the 'x' is clicked
    span.onclick = function () {
        closeModal();
    };

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    };

    // Expose openModal and closeModal to the global scope
    window.openModal = openModal;
    window.closeModal = closeModal;
})();