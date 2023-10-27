// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking as fingerpicking } from "./guitars.js";

import * as Guitars from "./guitars.js";
import User from "./user.js";

const me = new User("email@domain.com", "cole");
console.log(me.greeting());

// i dont like default, only use when you have one thing to export
console.log(Guitars.playGuitar());
console.log(Guitars.plucking());
console.log(Guitars.shredding());
