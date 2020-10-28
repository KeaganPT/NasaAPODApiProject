baseURL = 'https://api.nasa.gov/planetary/apod'
key = "?api_key=c4on8gSSYyqz2p1bzPhFWKIchMOxwDFoXtvvmajW"

imageShown = document.querySelector('img');
description = document.querySelector('.description');
title = document.querySelector('h3');
dateDisplay = document.querySelector("#date");
dateInput = document.querySelector("#dateInput");
submitForm = document.querySelector(".dateInput")

submitForm.addEventListener('submit',fetchApod)


fetch(baseURL+ key)
    .then(response => {
        return response.json();
    })
    .then(json =>{
        console.log(json);
        title.innerText = `${json.title}`
        dateDisplay.innerText =`date: ${json.date}`;
        let spaceImage = json.url;
        imageShown.src = spaceImage
        description.innerText = json.explanation;
        
        // return json
    });

function fetchApod(e){
    e.preventDefault();

fetch(baseURL+ key + '&date=' + dateInput.value)
    .then(response => {
        return response.json();
    })
    .then(json =>{
        console.log(json);
        title.innerText = `${json.title}`
        dateDisplay.innerText =`date: ${json.date}`;
        let spaceImage = json.url;
        imageShown.src = spaceImage
        description.innerText = json.explanation;
        
        // return json
    });
}