// This callback function is called when the content script has been injected and returned its results
function onPageDetailsReceived(pageDetails) {
	document.getElementById('username').value = pageDetails.username;
	document.getElementById('password').value = pageDetails.password;
	document.getElementById('songTitle').value = pageDetails.songTitle;
	document.getElementById('artist').value = pageDetails.artist;
	document.getElementById('playlist').value = pageDetails.playlist;
}

// Global reference to the status display SPAN
var statusDisplay = null;

// POST the data to the server using XMLHttpRequest
function addSong() {
	// Cancel the form submit
	event.preventDefault();
	// The URL to POST our data to
	var postUrl = 'http://spotadd.mybluemix.net/'; // May have to change the URL

	// Set up an asynchronous AJAX POST request
	var xhr = new XMLHttpRequest();
	xhr.open('GET', postUrl, true);

	// Prepare the data to be POSTed by URLEncoding each field's contents
	var username = encodeURIComponent(document.getElementById('username').value);
	var password = encodeURIComponent(document.getElementById('password').value);
	var songTitle = encodeURIComponent(document.getElementById('songTitle').value);
	var artist = encodeURIComponent(document.getElementById('artist').value);
	var playlist = encodeURIComponent(document.getElementById('playlist').value);

	var params = 'username=' + username + '&password=' + password + '&songTitle=' + songTitle + '&artist=' + artist + '&playlist=' + playlist;
	// Replace any instances of the URLEncoded space char with +
	params = params.replace(/%20/g, '+');

	// Set correct header for form data
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	// Handle request state change events
	xhr.onreadystatechange = function() {
		// If the request completed
		if (xhr.readyState == 4) {
			statusDisplay.innerHTML = '';
			if (xhr.status == 200) {
				// If it was a success, close the popup after a short delay
				statusDisplay.innerHTML = 'Saved!';
				window.setTimeout(window.close, 10000);
			} else {
				// Show what went wrong
				statusDisplay.innerHTML = 'Error saving: ' + xhr.statusText;
			}
		}
	};

	// Send the request and set status
	xhr.send(params);
	statusDisplay.innerHTML = 'Saving...';
}

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
	// Cache a reference to the status display SPAN
	statusDisplay = document.getElementById('status-display');
	// Handle the form submit event with our addSong functino
	document.getElementById('addSong').addEventListener('submit', addSong);
	// Get the event page
	chrome.runtime.getBackgroundPage(function(eventPage) {
		// Call the getPageInfo function in the event page, passing in our onPageDetailsReceived function as the callback.
		// This injects content.js into the current tab's HTML
		eventPage.getPageDetails(onPageDetailsReceied);
	});
});