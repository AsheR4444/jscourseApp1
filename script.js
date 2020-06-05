"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        const lastWatchedFilm = prompt('Один из просмотренных фильмов ?');
        const lastWatchedFilmRate = prompt('На сколько оцените его ?');

        if (lastWatchedFilm != null && lastWatchedFilmRate != null && lastWatchedFilmRate != '' && lastWatchedFilmRate != '' && lastWatchedFilm.length !== 50) {
            personalMovieDB.movies[lastWatchedFilm] = lastWatchedFilmRate;
        } else {
            i--;
        }
    }
}



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

// start();
// rememberMyFilms();
// detectPersonalLevel();
// showMyDB();
writeYourGenres();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номеров ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }

    showMyDB();
}
