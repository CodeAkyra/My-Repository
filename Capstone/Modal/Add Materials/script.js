// Get the modal
var modal = document.getElementById("return-add-material");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> elements that close the modal
var closeButtons = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function () {
        modal.style.display = "none";
    }
}

// Get the confirm button
var confirmButton = document.getElementById("confirmBtn");

confirmButton.onclick = function () {
    modal.style.display = "none";
}

// Handle the file selection dialog
document.getElementById('openFileButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

// Listen for changes to the file input (when a file is selected)
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        // Optionally, display a preview of the selected image
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.style.maxWidth = '200px';
            imgElement.style.maxHeight = '200px';

            // Clear previous images
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.innerHTML = '';
            imagePreview.appendChild(imgElement);
        };

        reader.readAsDataURL(file);
    }
});
