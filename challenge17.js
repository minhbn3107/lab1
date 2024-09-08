function checkDogs(dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice(1, -2);

    const combinedDogs = dogsJuliaCorrected.concat(dogsKate);

    combinedDogs.forEach((dogAge, index) => {
        if (dogAge >= 3) {
            console.log(
                `Dog number ${
                    index + 1
                } is an adult, and is ${dogAge} years old`
            );
        } else {
            console.log(`Dog number ${index + 1} is still a puppy`);
        }
    });
}

const dogsJuliaData1 = [3, 5, 2, 12, 7];
const dogsKateData1 = [4, 1, 15, 8, 3];

checkDogs(dogsJuliaData1, dogsKateData1);
