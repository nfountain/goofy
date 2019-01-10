//Global variables
var button = document.getElementById('lolcatButton');
var popupImage = document.getElementById('lolcatImage');
var reveal = document.getElementById('bigReveal');
var image = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Lolcat_in_folder.jpg";

//function to reveal image
var showImage = function () {
	reveal.style.display = "block";
	popupImage.src = image;
};
//event handler = on click, run showImage()
button.addEventListener('click', showImage);