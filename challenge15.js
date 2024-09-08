const poll = {
    question: "What is your favourite programming language?",
    options: ["JavaScript", "Python", "Rust", "C++"],
    answers: [0, 0, 0, 0],

    registerNewAnswer() {
        const input = prompt(
            `${this.question}\n0: ${this.options[0]}\n1: ${this.options[1]}\n2: ${this.options[2]}\n3: ${this.options[3]}\n(Write option number)`
        );

        const answer = Number(input);

        if (
            Number.isInteger(answer) &&
            answer >= 0 &&
            answer < this.answers.length
        ) {
            this.answers[answer]++;
            this.displayResults();
        } else {
            alert("Invalid option. Please enter a number between 0 and 3.");
        }
    },

    displayResults(type = "array") {
        if (type === "array") {
            console.log(this.answers);
        } else if (type === "string") {
            console.log(`Poll results are ${this.answers.join(", ")}`);
        }
    },
};

document.getElementById("pollButton").addEventListener("click", () => {
    poll.registerNewAnswer();
});

const testData1 = [5, 2, 3];
poll.displayResults.call({ answers: testData1 }, "array"); // Hiển thị dưới dạng mảng
poll.displayResults.call({ answers: testData1 }, "string"); // Hiển thị dưới dạng chuỗi
