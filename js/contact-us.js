"use strict"

function showLocation(position) {}

function errorHandler() {
    console.log('nope')
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
} else {
    console.log('Geolocation is not supported by your browser');
}

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVhcml1bSIsImEiOiJjbDF3ZzJ4MW0wZGRvM2tvMXdpZTR1NzVmIn0.TksuYf29aF9_CCGOwbBmKg';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-97.1750196, 49.8482787], // starting position [lng, lat]
    interactive: false,
    zoom: 17 // starting zoom
});

// Create a new marker.
const marker = new mapboxgl.Marker()
    .setLngLat([-97.1750196, 49.8482787])
    .addTo(map);



const $form = document.getElementById('form')
const $firstName = document.getElementById('first-name')
const $lastName = document.getElementById('last-name')
const $age = document.getElementById('age')
const $email = document.getElementById('email')
const $submit = document.getElementById('submit')
const $mes = document.getElementById('ER')

const emailPattern = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/
$submit.addEventListener('click', () => {
    let firstName = $firstName.value.trim();
    let email = $email.value.trim();

    let message = '';
    let valid = true;
    let count = 0;

    if (firstName === '') {
        message += 'First name is required and'
        valid = false;
        count++;
    }

    if (email === '') {
        message += ' email is required\n';
        valid = false;
        count++;

    } else {
        if (!emailPattern.test(email)) {
            message += ' email is not valid';
            valid = false;
        }
    }
    if (count === 3) {
        ER.style.color = 'green'
        ER.innerText = 'Message Sent'
        ER.style.opacity = 1
    } else if (!valid) {
        ER.style.color = 'red'
        ER.innerText = message
        ER.style.opacity = 1

    } else {
        ER.style.color = 'green'
        ER.innerText = 'Message Sent'
        ER.style.opacity = 1
    }
})