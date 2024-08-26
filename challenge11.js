const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Create player arrays for each team
const players1 = game.players[0];
const players2 = game.players[1];

// 2. Create variables for Bayern Munich goalkeeper and field players
const [gk, ...fieldPlayers] = players1;

// 3. Create an array 'allPlayers' containing all players of both teams
const allPlayers = [...players1, ...players2];

// 4. Create a new array 'players1Final' containing all original team1 players plus substitutes
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5. Create variables for each odd
const { team1, x: draw, team2 } = game.odds;

// 6. Function to print player names and number of goals
const printGoals = function (...players) {
    console.log(`${players.length} goals were scored by:`);
    players.forEach((player) => console.log(player));
};

// Test the function with 'Davies', 'Muller', 'Lewandowski', 'Kimmich'
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// Test the function with players from game.scored
printGoals(...game.scored);

// 7. Print which team is more likely to win
console.log(
    `The team more likely to win is ${team1 < team2 ? game.team1 : game.team2}`
);
