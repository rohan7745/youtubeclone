const apiKey = 'AIzaSyB8MB4MtBH7-Bq90WDcJZ97S6v6zRXg3fw'; 
const videoId = sessionStorage.getItem('videoId'); 


fetch(`https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&id=${videoId}`)
    .then(response => response.json())
    .then(data => {
        const video = data.items[0];
        renderVideoPlayer(video);
    })
    .catch(error => console.error('Error fetching video details:', error));

function renderVideoPlayer(video) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoFrame = document.createElement('iframe');
    videoFrame.width = '560';
    videoFrame.height = '315';
    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
    videoFrame.frameborder = '0';
    videoFrame.allowfullscreen = true;
    videoPlayer.appendChild(videoFrame);
}
