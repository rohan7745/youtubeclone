document.addEventListener('DOMContentLoaded', function () {
    searchVideos();
});

const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', function () {
    searchVideos();
});


const apiKey = 'AIzaSyB8MB4MtBH7-Bq90WDcJZ97S6v6zRXg3fw'; 


function searchVideos() {
    const searchInput = document.querySelector('.search-bar').value;
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchInput}&part=snippet&type=video&maxResults=62`)
        .then(response => response.json())
        .then(data => renderVideos(data.items))
        .catch(error => console.error('Error fetching videos:', error));
}

function renderVideos(videos) {
    const videoContent = document.getElementById('video_content');
    if (!videoContent) {
        console.error('Video content element not found.');
        return;
    }

    videoContent.innerHTML = '';
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
            <div class="video-info">
                <h2>${video.snippet.title}</h2>
                <p>${video.snippet.description}</p>
                <button onclick="showVideoDetails('${video.id.videoId}')">View Details</button>
            </div>
        `;
        videoContent.appendChild(videoItem);
    });
}

function showVideoDetails(videoId) {
    sessionStorage.setItem('videoId', videoId);
    window.location.href = 'videoDetails.html';
}
