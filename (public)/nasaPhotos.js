baseURL = 'https://api.nasa.gov/planetary/apod'
key = "?api_key=c4on8gSSYyqz2p1bzPhFWKIchMOxwDFoXtvvmajW"

imageShown = document.querySelector('img');
description = document.querySelector('.description');
title = document.querySelector('h3');
dateDisplay = document.querySelector("#date");
dateInput = document.querySelector("#dateInput");
submitForm = document.querySelector(".dateInput");
iframe = document.querySelector("iframe");


submitForm.addEventListener('submit',fetchApod)


fetch(baseURL+ key)
    .then(response => {
        return response.json();
    })
    .then(json =>{
        console.log(json);
        title.innerText = `${json.title}`
        dateDisplay.innerText =`date: ${json.date}`;
        if(json.media_type == "video"){
            imageShown.style.display = "none";
            iframe.src = json.url;
            iframe.style.display = "inline-block";
        } else {
            iframe.style.display = "none";
            imageShown.src = json.url;
            imageShown.style.display = "inline-block";
        }
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
        if(json.media_type == "video"){
            imageShown.style.display = "none";
            iframe.src = json.url;
            iframe.style.display = "inline-block";
        } else {
            iframe.style.display = "none";
            imageShown.src = json.url;
            imageShown.style.display = "inline-block";
        }
        description.innerText = json.explanation;
        
        // return json
    });
}