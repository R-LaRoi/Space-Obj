const solarSystem = [
  { name: "Mercury", ringSystem: false, moons: [] },
  { name: "Venus", ringSystem: false, moons: [] },
  { name: "Earth", ringSystem: false, moons: ["The Moon"] },
  { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
  {
    name: "Jupiter",
    ringSystem: true,
    moons: ["Europa", "Ganymede", "Io", "Callisto"],
  },
  {
    name: "Saturn",
    ringSystem: true,
    moons: ["Titan", "Enceladus", "Rhea", "Mimas"],
  },
  {
    name: "Uranus",
    ringSystem: true,
    moons: ["Miranda", "Titania", "Ariel", "Umbriel"],
  },

  { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] },
];

// 1. Print the array of Jupiter's moons to the console (no for loop, just print the entire array).

let Jupiter = solarSystem.find((planet) => planet.name === "Jupiter");
console.log(Jupiter.moons);

// 2. Print the name of Neptune's moon "Nereid" to the console.

let Neptune = solarSystem.find((planet) => planet.name === "Neptune");

console.log(Neptune.moons.find((moon) => moon === "Nereid"));

// 3. Add a new moon called "Endor" to Venus' moons array.

let Venus = solarSystem.find((planet) => planet.name === "Venus");
Venus.moons.push("Endor");
console.log(Venus.moons);

// 4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").

let pluto = {};
pluto.name = "Pluto";
pluto.ringSystem = false;
pluto.moons = ["Charon"];
solarSystem.push(pluto);
console.log(solarSystem);

// 5. Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.

let Earth = solarSystem.find((planet) => planet.name === "Earth");
Earth.diameter = "7917.5";
console.log(Earth);

// 6. Change Mercury's ringSystem boolean to true.

let Mercury = solarSystem.find((planet) => planet.name === "Mercury");

Mercury["ringSystem"] = true;

console.log(Mercury);

// 7. Change Uranus' moon "Umbriel" to "Oberon"
let Uranus = solarSystem.find((planet) => planet.name === "Uranus");

Uranus.moons.pop("Umbriel");
Uranus.moons.push("Oberon");

console.log(Uranus.moons);

// 8. Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others.

let planetRingSystem = [];

let solarRings = solarSystem.forEach((ring) => {
  if (ring.ringSystem === true) {
    planetRingSystem.push(ring);
  }
});

console.log(planetRingSystem);

// You want to make a loop that goes over each item in the array, and include an if statement.
