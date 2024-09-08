function calcAverageHumanAge(ages) {
    const humanAges = ages.map((dogAge) => {
        if (dogAge <= 2) {
            return 2 * dogAge;
        } else {
            return 16 + dogAge * 4;
        }
    });

    const adultDogs = humanAges.filter((humanAge) => humanAge >= 18);

    const averageHumanAge =
        adultDogs.reduce((sum, age) => sum + age, 0) / adultDogs.length;

    return averageHumanAge;
}

const data1 = [5, 2, 4, 1, 15, 8, 3];
console.log(calcAverageHumanAge(data1));
