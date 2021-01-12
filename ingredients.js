const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("while loop:" + "\n")

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

console.log("\n" + "for loop:" + "\n")

// Write a for loop that prints out the contents of ingredients:


for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("\n" + "backward loop:" + "\n")

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let i = ingredients.length; i > 0; i--) {
  console.log(ingredients[i - 1]);
}
