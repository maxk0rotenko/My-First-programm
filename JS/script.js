"use strict"; 

const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
     
};

const a = prompt('Один из просмотренных последних фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из просмотренных последних фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);