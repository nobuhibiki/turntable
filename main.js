// List of image file paths
const imageFiles = [
  'src/Can\'t\ Take\ My\ Eyes\ Off\ You\ eyelis.',
  'src/Retro\ 1.'
];
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const vinyl = document.getElementById("vinyl");

// Create an Audio object
const currentAudio = new Audio();

function changeSong(songUrl) {
  const files = imageFiles[songUrl];
  currentAudio.src = files + 'mp3';
//  currentAudio.play();
  const songImage = files + 'jpg';
  console.log(songImage);
  vinyl.style.setProperty('--image', `url(${songImage})`);
  vinyl.style.animationPlayState = 'running';
}

// Function to play the audio
function playAudio() {
  currentAudio.play();
  vinyl.style.animationPlayState = 'running';
}

function pauseAudio() {
  currentAudio.pause();
  vinyl.style.animationPlayState = 'paused';
}

// Attach an event listener to the play button
playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);

// Function to generate a random rotation value between -30 and 30 degrees
function getRandomRotation() {
  return Math.floor(Math.random() * 30) - 15;
}

// Get the image gallery container element
const imageGallery = document.getElementById('album-list');

function imageListener(image) {
  image.addEventListener('click', function(event) {
    // Access the clicked image element
    var clickedImage = event.target;
    console.log(clickedImage);
    // Access the ID of the clicked image
    var imageId = clickedImage.id;
    changeSong(imageId);
    // Perform actions based on the clicked image
    console.log('Clicked image ID:', imageId);
  });
}

// Generate and append image elements to the gallery
imageFiles.forEach((file, index) => {
  const imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';
  imageListener(imageContainer);

  const image = document.createElement('img');
  image.src = file + 'jpg';
  image.id = index;

  const rotation = getRandomRotation();
  imageContainer.style.setProperty('--random-rotate', rotation + 'deg');

  // Set position and margin for each image container
  imageContainer.style.zIndex = `${imageFiles.length - index}`; // Reverse the stacking order

  imageContainer.appendChild(image);
  imageGallery.appendChild(imageContainer);
});