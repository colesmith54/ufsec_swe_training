const myObj = { name: "cole" };
console.log(myObj.name);

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["cooking", "coding", "cycling"],
  beverage: {
    hot: "coffee",
    cold: "soda",
  },
  action: function () {
    return `Time for ${this.beverage.hot}!`;
  },
};

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vroooooooooooooooooooooom!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whooooooosh!";
};

const tesla = Object.create(car);
tesla.engine = function () {
  return "whooommm...";
};

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

console.log(Object.keys(band));
console.log(Object.values(band));

for (const job in band) {
  console.log(`On ${job}, it's ${band[job]}!`);
}

delete band.drums;
console.log(band.hasOwnProperty("drums"));

const { vocals, guitar, bass, drums } = band;
console.log(bass);

function sings({ vocals }) {
  return vocals;
}

console.log(sings(band));
