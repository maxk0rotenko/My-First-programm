"use strict"; 

// #1 console programm practice

const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
     
};

// const a = prompt('Один из просмотренных последних фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из просмотренных последних фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDb.movies[a] = b;
// personalMovieDb.movies[c] = d;

// #2 modify console programm with Сonditions and Сycles

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных последних фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDb.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
if (personalMovieDb.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    console.log('Вы классичсекий зритель');
} else if (personalMovieDb.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Error');
}

// #3 modify console programm with Functions and Methods

console.log(personalMovieDb); 