const button = document.querySelector("button");
button.addEventListener("click", () => {
    // Get the input from the textarea
    const text = document.querySelector("textarea").value;
    const lines = text.split("\n"); // Split by new line character

    // Loop over each line, convert to camelCase and log to console
    lines.forEach((line, index) => {
        const [first, second] = line.trim().toLowerCase().split("_");
        const camelCase =
            first + (second ? second[0].toUpperCase() + second.slice(1) : "");

        // Add check marks based on line number
        const checkMarks = "✅".repeat(index + 1);

        // Log the camelCase variable name with check marks
        console.log(`${camelCase.padEnd(20)}${checkMarks}`);
    });
});
