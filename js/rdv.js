document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('upload');
    const uploadLabel = document.getElementById('uploadlabel');

    fileInput.addEventListener('change', function () {
        if (fileInput.files.length > 0) {
            uploadLabel.classList.add('file-selected');
            uploadLabel.classList.remove('file-not-selected');
            uploadLabel.textContent = ('Fichier sélectionné');
        } else {
            uploadLabel.classList.add('file-not-selected');
            uploadLabel.classList.remove('file-selected');
            uploadLabel.textContent = 'Choisir un fichier';
        }
    });
});