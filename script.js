// Function to fetch videos based on search query
function searchVideos() {
    const apiKey = 'https://developers.google.com/youtube/v3/docs';
  const searchInput = document.getElementById('searchInput').value;
  const maxResults = 20; // Number of results you want to fetch

  // Fetch videos from YouTube API
  fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&maxResults=${maxResults}&q=${searchInput}`)
    .then(response => response.json())
    .then(data => {
      // Handle the response data, iterate through items and render video items onto the UI
      const videoList = document.getElementById('videoList');
      videoList.innerHTML = ''; // Clear previous search results

      data.items.forEach(item => {
        // Render each video item onto the UI
        const videoId = item.id.videoId;
        const videoTitle = item.snippet.title;

        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.dataset.videoId = videoId;
        videoItem.textContent = videoTitle;

        videoList.appendChild(videoItem);
      });
    })
    .catch(error => {
      console.error('Error fetching videos:', error);
    });
    
  }
  
  // Function to navigate to video details page
  function navigateToVideoDetails(videoId) {
    // Event listener for clicking on a video item
document.getElementById('videoList').addEventListener('click', function(event) {
    if (event.target.classList.contains('video-item')) {
      const videoId = event.target.dataset.videoId;
      navigateToVideoDetails(videoId);
    }
  });
  
  }
  
  // Event listener for clicking on a video item
  document.getElementById('videoList').addEventListener('click', function(event) {
    if (event.target.classList.contains('video-item')) {
      const videoId = event.target.dataset.videoId;
      navigateToVideoDetails(videoId);
    }
  });
  