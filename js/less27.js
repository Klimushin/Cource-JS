'use strict'

let numbersOfFilms

function start () {
    numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
}

start()

function detectPersonalLevel () {
    if (numbersOfFilms < 10) {
        alert('Просмотрено мало фильмов')
    } else if (10 <= numbersOfFilms < 30) {
        alert('Вы классический зритель')
    } else if (numbersOfFilms >= 30) {
        alert('Вы киноман')
    } else {
        alert('Произошла ошибка')       
    }
}

detectPersonalLevel()

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = +prompt('На сколько оцените его?', '')
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b
        } else {
            i--
        }
    }
}

rememberMyFilms()

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`)
    }
}

writeYourGenres()