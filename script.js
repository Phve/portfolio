function downloadVideo() {
    const videoUrl = document.getElementById('video-url').value;
    const saveLocation = document.getElementById('save-location').value;
    const status = document.getElementById('download-status');

    if (videoUrl && saveLocation) {
        fetch('http://127.0.0.1:5000/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url: videoUrl,
                save_path: saveLocation
            }),
        })
        .then(response => response.json())
        .then(data => {
            status.textContent = data.message;
        })
        .catch((error) => {
            status.textContent = 'An error occurred: ' + error;
        });
    } else {
        status.textContent = 'Please enter a valid YouTube URL and save location.';
    }
}

