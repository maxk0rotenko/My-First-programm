// My Firts console programm
"use strict"; 


const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }    
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDb.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
            console.log('Вы классичсекий зритель');
        } else if (personalMovieDb.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Error');
        }
    },
    showMyDb: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDb); 
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDb.privat) {
            personalMovieDb.privat = false;
        } else {
            personalMovieDb.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == '' || genre == null) {
                console.log('Вы ввели неккоректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDb.genres[i - 1] = genre; 
            }
        }

        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    } 
};
