const movie = {
    title: "Its a wonderful life",
    year: 1946,
    language: "Spanish"
};

movie.cast = ["James Stewart", "Donna Reid"];
movie.language = "English"
movie['subtitle-langauge'] = "German"
// delete movie.year
movie.ratings = {
    critic: 94,
    audience: 95
}

// console.log(movie)

// console.log(movie.ratings.audience)

for (const key in movie) {
    console.log(movie[key])
}

