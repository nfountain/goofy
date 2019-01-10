//Global variables
var button = document.getElementById('lolcatButton');
var popupImage = document.getElementById('lolcatImage');
var reveal = document.getElementById('bigReveal');

//function to reveal image
var showImage = function () {
	reveal.style.display = "block";//used this to test the that event handler was working properly, since I was struggling with the steps for the function.
	popupImage.src = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Lolcat_in_folder.jpg";
};
//event handler = on click, run showImage()
button.addEventListener('click', showImage);