// class Pizza {
//   constructor(size, crust) {
//     this.size = size;
//     this.crust = crust;
//   }
//   getSize() {
//     return this.size;
//   }
//   setSize(size) {
//     this.size = size;
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(crust) {
//     this.crust = crust;
//   }
// }

// class SpecialPizza extends Pizza {
//   constructor(size, crust, toppings) {
//     super(size, crust);
//     this.toppings = toppings;
//   }
//   getToppings() {
//     return this.toppings;
//   }
//   setToppings(toppings) {
//     this._toppings = _toppings;
//   }
//   slice() {
//     console.log(
//       `Our ${this.size} ${this.crust} pizza with ${this.toppings} has 8 slices.`
//     );
//   }
// }

function pizzaFactory(sizee, crustt) {
  const crust = crustt;
  const size = sizee;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} pizza.`),
  };
}

class Pizza {
  crust = "thin";
  #sauce = "tomato";
  #size;
  constructor(size) {
    this.#size = size;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(crust) {
    this.crust = crust;
  }
  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza!`
    );
  }
}

const myPizza = pizzaFactory("large", "thin");
myPizza.bake();

const myFancyPizza = new Pizza("large");
myFancyPizza.hereYouGo();
