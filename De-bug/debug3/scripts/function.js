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
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Listen to messages from the iframe (HTML2, HTML3, HTML4) to trigger modal
window.addEventListener('message', function(event) {
    if (event.data === 'openModal') {
        openModal();
    }
});
