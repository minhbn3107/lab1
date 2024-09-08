const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach(
    (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose)
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
if (sarahDog.curFood > sarahDog.recommendedFood * 1.1) {
    console.log(`Sarah's dog is eating too much.`);
} else if (sarahDog.curFood < sarahDog.recommendedFood * 0.9) {
    console.log(`Sarah's dog is eating too little.`);
} else {
    console.log(`Sarah's dog is eating an okay amount.`);
}
// 3. Create an array containing all owners of dogs who eat too much 'ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
dogs.filter((dog) => dog.curFood > dog.recommendedFood * 1.1)
    .flatMap((dog) => dog.owners)
    .forEach((owner) => console.log(`${owner}'s dog is eating too much.`));

dogs.filter((dog) => dog.curFood < dog.recommendedFood * 0.9)
    .flatMap((dog) => dog.owners)
    .forEach((owner) => console.log(`${owner}'s dog is eating too little.`));
//5. Check if there is any dog eating exactly the amount of food that is recommended
const isAnyDogEatingExact = dogs.some(
    (dog) => dog.curFood === dog.recommendedFood
);
console.log(isAnyDogEatingExact);
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)

const isAnyDogEatingOkay = dogs.some(
    (dog) =>
        dog.curFood > dog.recommendedFood * 0.9 &&
        dog.curFood < dog.recommendedFood * 1.1
);
console.log(isAnyDogEatingOkay); // true hoặc false
//7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
const dogsEatingOkay = dogs.filter(
    (dog) =>
        dog.curFood > dog.recommendedFood * 0.9 &&
        dog.curFood < dog.recommendedFood * 1.1
);
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects)
const sortedDogs = [...dogs].sort(
    (a, b) => a.recommendedFood - b.recommendedFood
);
