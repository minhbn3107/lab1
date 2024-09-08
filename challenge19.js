const calcAverageHumanAge = (ages) =>
    ages
        .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
        .filter((humanAge) => humanAge >= 18)
        .reduce((sum, age, _, arr) => sum + age / arr.length, 0);

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(data1)); // expect: 44
console.log(calcAverageHumanAge(data2)); // expect: 47.333...
