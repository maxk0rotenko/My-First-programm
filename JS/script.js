// My Firts console programm
"use strict"; 

let numberofFilms;

function start() {
    const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
        const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }    
}

start();

const personalMovieDb = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
     
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
        console.log('Вы классичсекий зритель');
    } else if (personalMovieDb.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDb); 
    }
}

showMyDb();

function writeYourGenres (answer) {
    for (let i = 1; i <= 3; i++) {
        personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
