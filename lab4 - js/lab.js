const { cities } = require('./data.js');
const prompt = require('prompt-sync')(); 

function getAveragePopulation(cities) {
    let total_population = 0;
    for (city of cities) {
        total_population += city.population;
    }

    let average = total_population / cities.length;
    console.log("");
    console.log(`The average population of the top 10 cities in the Philippines is: ${average}`);
    console.log("");
}

function filterCitiesByRegion(cities) {
    let region = prompt("Enter region (e.g. NCR, CAR, MIMAROPA, CALABARZON, BARMM, I to XIII): ");

    console.log("");
    console.log(`Cities in Region ${region}:`)
    for (city of cities) {
        if (city.region === region) {
            console.log(city.name);
        }

    }

    console.log("");
}

function getLargestCityByArea(cities) {
    let area = prompt("Enter max area you want to find (in km^2): ");
    
    let largest_city = cities[0];
    for (city of cities) {
        if (city.area > area) {
            continue;
        }
        
        if (city.area > largest_city.area) {
            largest_city = city;
        }
    }

    console.log("");
    console.log(`The largest city given the max area (in km^2) is ${largest_city.name} with an area of ${largest_city.area} km^2.`);
    console.log("");
}

function groupCitiesByPopulationRange(cities) {
    let min_population = prompt("Enter the minimum population range: ");
    let max_population = prompt("Enter the maximum population range: ");

    console.log("");

    console.log("The cities with a population of the given population range are: ");
    for (city of cities) {
        if (city.population >= min_population && city.population <= max_population) {
            console.log(city.name + " with a population of " + city.population);
        }
    }

    console.log("");
}

programLoop:
while (true) {
    console.log("CITY DEMOGRAPHICS");
    console.log("[1] Get average population");
    console.log("[2] Filter cities by region");
    console.log("[3] Find the largest city by area");
    console.log("[4] Group cities by population ranges");
    console.log("[5] Exit");

    var input = prompt("Enter command: ");

    switch(input) {
        case "1":
            getAveragePopulation(cities);
            break;

        case "2":
            filterCitiesByRegion(cities);
            break;

        case "3":
            getLargestCityByArea(cities);
            break;

        case "4":
            groupCitiesByPopulationRange(cities);
            break;

        case "5":
            console.log("Bye!");
            break programLoop;

        default:
            console.log("Invalid input!");
            break;
    }

    console.log("");
}