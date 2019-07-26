"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
const URI = "https://api.github.com";
const button = document.querySelector('.button');

button.addEventListener('click',() =>)
fetch(URI + "/users/lemon8821")
  .then(response => response.json())
  .then(response => console.log(response));