const printForecast = (arr) => {
    let forecastStr = "";
    for (let i = 0; i < arr.length; i++) {
        forecastStr += `... ${arr[i]}°C in ${i + 1} days `;
    }
    console.log(forecastStr + "...");
};

printForecast([17, 21, 23]);
