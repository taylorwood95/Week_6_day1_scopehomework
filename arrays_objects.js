const sports = ["football", "tennis", "rugby"];

// console.log(sports[sports.length -1]);

sports.push("curling");
sports.push("snooker");
sports.push("darts");

// console.log(sports)

// sports.pop();
// console.log(sports)

sports.unshift("Swimming")

// const splicedSport = sports.splice(3,1, "badminton")

// console.log(sports)
// console.log(splicedSport)


for (const sport of sports){
    console.log(sport);
}

for (let index = 0; index < sports.length; index ++){
    sports[index] = sports[index].toUpperCase();

}

console.log(sports)

