const api = {
    key: "43404d29aa1c79d3737ff0a16883f5c2",
    baseurl:"https://home.openweathermap.org/data/2.5/",

}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${{query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);

}

function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
}
    