// Function to load HTML into the iframe
function loadPage(pageUrl) {
    document.getElementById('contentIframe').src = pageUrl;
}

// Function to open modal
function openModal() {
    document.getElementById('myModal').style.display = 'flex';
}

// Function to close modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
