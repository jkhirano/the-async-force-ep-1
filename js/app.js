// person4
let person4 = document.getElementById("person4Name");
let person4HomeWorld = document.getElementById("person4HomeWorld");

const req = new XMLHttpRequest();
function reqListener() {
  let person4Response = JSON.parse(this.response);
  // console.log(person4Response);
  person4.innerHTML = person4Response.name;

  // person4HomeWorld
  const req2 = new XMLHttpRequest();
  function reqListener2() {
    let person4HomeWorldResponse = JSON.parse(this.response);
    person4HomeWorld.innerHTML = person4HomeWorldResponse.name;
  }

  req2.addEventListener("load", reqListener2);
  req2.open("GET", person4Response.homeworld);
  req2.send();
}

req.addEventListener("load", reqListener);
req.open("GET", "https://swapi.co/api/people/4");
req.send();

// person14Name
let person14 = document.getElementById("person14Name");
let person14Species = document.getElementById("person14Species");

const req3 = new XMLHttpRequest();

function reqListener3() {
  let person14Response = JSON.parse(this.response);
  person14.innerHTML = person14Response.name;

  // person14Species
  const req4 = new XMLHttpRequest();
  function reqListener4() {
    let person14SpeciesResponse = JSON.parse(this.response);
    person14Species.innerHTML = person14SpeciesResponse.name;
  }

  req4.addEventListener("load", reqListener4);
  req4.open("GET", person14Response.homeworld);
  req4.send();
}

req3.addEventListener("load", reqListener3);
req3.open("GET", "https://swapi.co/api/people/14/");
req3.send();

// films
const req5 = new XMLHttpRequest();

function reqListener5() {
  let filmResponse = JSON.parse(this.response);
  console.log(filmResponse);
  let filmList = document.getElementById("filmList");

  for (let i = 0; i < filmResponse.results.length; i++) {
    let film = document.createElement("li");
    film.className = "film";
    film.innerHTML = filmResponse.results[i].title;
    filmList.appendChild(film);
  }

  // planets
  const req6 = new XMLHttpRequest();
  function reqListener6() {
    let planetResponse = JSON.parse(this.response);
    let planetList = document.createElement("ul");

    for (let j = 0; j < filmResponse.results[i].planets.length; j++) {
      planetList.innerHTML = planetResponse.name;
      film.appendChild(planetList);
    }
  }

  req6.addEventListener("load", reqListener6);
  req6.open("GET", filmResponse.results[i].planets[j]);
  req6.send();
}

req5.addEventListener("load", reqListener5);
req5.open("GET", "https://swapi.co/api/films/");
req5.send();
