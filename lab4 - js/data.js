// Each city record has a name, population, area, and region. 
// Write functions to:
//  - calculate average population
//  - filter cities by region
//  - find the largest city by area
//  - group cities by population ranges
//  - simulate fetching new city data asynchronously

/* 
Top 10 Cities in the Philippines
1. Quezon City
2. Manila
3. Davao City
4. Caloocan
5. Taguig
6. Zamboanga City
7. Cebu City
8. Antipolo
9. Pasig
10. Cagayan De Oro

Population Sources from PSA
Area in km^2
*/

// const city_1 = new Map([
//     ["name", "Quezon City"],
//     [population, 3080000],
//     [area, 166.2],
//     [region, "NCR"]
// ]);

const quezon = {
    name: "Quezon City",
    population: 3080000,
    area: 166.2,
    region: "NCR",
}

const manila = {
    name: "City of Manila",
    population: 1900000,
    area: 42.34,
    region: "NCR",
}

const davao = {
    name: "Davao City",
    population: 1850000,
    area: 2443.61,
    region: "XI"
}

const caloocan = {
    name: "City of Caloocan",
    population: 1712000,
    area: 53.33,
    region: "NCR"
}

const taguig = {
    name: "City of Taguig",
    population: 1308000,
    area: 47.8,
    region: "NCR"
}

const zamboanga = {
    name: "Zamboanga City",
    population: 1018800,
    area: 1483,
    region: "IX"
}


const cebu = {
    name: "Cebu City",
    population: 965000,
    area: 315,
    region: "VII"
}

const antipolo = {
    name: "City of Antipolo",
    population: 913000,
    area: 306,
    region: "IV-A"
}

const pasig = {
    name: "City of Pasig",
    population: 853000,
    area: 31,
    region: "NCR"
}

const cdo = {
    name: "Cagayan De Oro",
    population: 741600,
    area: 412.8,
    region: "X"
}

export let cities = [quezon, manila, davao, caloocan, taguig, zamboanga, cebu, antipolo, pasig, cdo];

