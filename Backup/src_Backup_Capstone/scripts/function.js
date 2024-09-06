// Function to load the specified HTML file into the iframe
function loadHTML(htmlFile) {
    document.getElementById('contentIframe').src = htmlFile;
}

// Handle the modal in HTML1
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Close the modal when the 'x' is clicked
span.onclick = function () {
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// New button to load new HTML


// Listen to messages from the iframe (html2, html3, html4, new-html) to trigger modal or load html
window.addEventListener('message', function (event) {
    if (event.data === 'openModal') {
        openModal();
    } else if (event.data === 'resetIframe') {
        document.getElementById('contentIframe').src = '';
    } else if (event.data === 'create-request-btn') {
        document.getElementById('contentIframe').src = '../main/production/Forms/create-request-material.html';
    }
});