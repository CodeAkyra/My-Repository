// Function to load the specified HTML file into the iframe
function loadHTML(htmlFile) {
    document.getElementById('contentIframe').src = htmlFile;
}

// Handle the modal in index.html
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Close the modal when the 'x' is clicked
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Listen to messages from the iframe (html2, html3, html4) to trigger modal or reset iframe
window.addEventListener('message', function(event) {
    if (event.data === 'openModal') {
        openModal();
    } else if (event.data === 'resetIframe') {
        // Reset the iframe to its initial or default content
        document.getElementById('contentIframe').src = '';
    }
});
