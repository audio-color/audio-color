'use strict';

require('dotenv').config();

const request = require('request');
const express = require('express');
const router = express.Router();
const querystring = require('querystring'); 

const SpotifyWebApi = require('spotify-web-api-node');
const moodApp = require('../app.js');
const got = require('got');


const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'https://localhost:3000/callback'
});

// spotifyApi.setAccessToken();
let redirect_uri = process.env.REDIRECT_URI || 'http://localhost:3000/callback';

router.get('/', loadHome);
router.get('/login', oauth);
router.get('/callback', getToken);
router.get('/nowplaying', getCurrentlyPlaying);
router.get('/colorize', colorize);

let access_token = '';

function loadHome(req, res, next) {

  const spotifyApi = new SpotifyWebApi({
    accessToken: access_token,
  });

  return spotifyApi.getMe()
    .then(me => {
      res.status(200).send(me.body);
    })
    .catch(console.error);
};

function getToken(req, res) {
  let code = req.query.code || null;
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function (error, response, body) {
    access_token = body.access_token

    let uri = process.env.FRONTEND_URI || 'http://localhost:3000/'
    res.redirect(200, uri + '?access_token=' + access_token)


  })
};

function oauth(req, res, next) {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const redirect_uri = 'http://localhost:3000/callback'

  const scope = 'user-read-private user-read-email user-read-currently-playing user-read-playback-state';
  res.redirect(200, 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
    }))
};

function getCurrentlyPlaying(req, res, next) {
  getMood()
    .then(mood => {
      let moodObj = { mood: mood }
      
      res.status(200).send(moodObj);
      
    });
};

function colorize(req, res) {
  return getMood()
    .then(mood => {
      let colorSet = moodApp.convertMoodToRGB(mood)
      
      res.status(200).send(colorSet)
      setInterval(colorize, 5000);
    });
};

const getMood = function () {
  const spotifyApi = new SpotifyWebApi({
    accessToken: 'BQAtC4q0MxdgeQl37KLlggJCu-8agh2pM_g6rUiKqCClL5UUosPdF7OkMj1IfPzeYafZ3uabayMFfD5FL8b5We7W481Ifg6cevLooJVcBULfzUuRrppjFdTekQhE_hVzvD79RMN0yOCPs9ENCZaPDHD3-SYOaAw6gX8V18548SDRVCbiEJwusxYUww',
  });

  return spotifyApi.getMyCurrentPlayingTrack()
  
    .then(data => {
      let id = data.body.item.id;
      console.log('track name', data.body.item.name)
      return spotifyApi.getAudioFeaturesForTrack(id)
    }).then(data => {
      
      let valence = Math.round((data.body.valence * 10));
      console.log('mood score', valence);
      return valence;
      
    }).catch(err => {
      console.log(err);
    })
};

//setInterval(getCurrentlyPlaying, 5000);
// function getColor() {
//   got('http://localhost:3000/colorize', { json: true }).then(response => {
//     console.log(response);
//     //console.log(response.body.explanation);
//   }).catch(error => {
//     console.log(error.response.body);
//   });
// }
// setInterval(getColor, 10000);
colorize();
module.exports = router;