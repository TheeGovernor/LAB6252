/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var SpotifyWebApi = require("../");
var authorizationCode = '<insert authorization code>';

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

    
// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
   /*
var spotifyApi = new SpotifyWebApi({
  clientId : 'e08932f0814b4d36a1cc22cab827e217',
  clientSecret : 'f219e8adec224ced9e61d014634709bb',
  redirectUri : '<insert redirect URI>'
});
*/
/*
spotifyApi.authorizationCodeGrant(authorizationCode)
  .then(function(data) {

    // Save the access token so that it's used in future requests
    spotifyApi.setAccessToken(data['access_token']);
});

spotifyApi.authorizationCodeGrant(authorizationCode)
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
    return spotifyApi.addTracksToPlaylist('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"],
      {
        position : 10
      })
  }).then(function(data) {
    console.log('Added tracks to the playlist!');
  }).catch(function(err) {
    console.log('Something went wrong!', err.message);
  });
  */
/*
app.get('/hi',function(req,res) {
	
spotifyApi.searchTracks('Love', function(err, data) {
  if (err) {
    console.error('Something went wrong', err.message);
    return;
  }

  // Print some information about the results
  console.log('I got ' + data.body.tracks.total + ' results!');

  // Go through the first page of results
  var firstPage = data.body.tracks.items;
  console.log('The tracks in the first page are.. (popularity in parentheses)');

 
  firstPage.forEach(function(track, index) {
    console.log(index + ': ' + track.name + ' (' + track.popularity + ')');
  });
});
	
    res.send("Hello Worldddd!");
});


*/

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
