'use strict'

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    startFn: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
        }
    },
    detectPersonalLevel: function () {
        if (numbersOfFilms < 10) {
            alert('Просмотрено мало фильмов')
        } else if (10 <= numbersOfFilms < 30) {
            alert('Вы классический зритель')
        } else if (numbersOfFilms >= 30) {
            alert('Вы киноман')
        } else {
            alert('Произошла ошибка')       
        }
    },
    addFilms: function () {
        for (let i = 0; i < 2; i++) {
            const   a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                    b = +prompt('На сколько оцените его?', '')
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b
            } else {
                i--
            }
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB['privat'] = false
        } else {
            personalMovieDB['privat'] = true
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const answer = prompt(`Ваш любимый жанр под номером ${i}`)
            if (answer != null && answer != '') {
                personalMovieDB.genres[i-1] = answer
            } else {
                i--
            }
        }
    }
}

personalMovieDB.startFn()
personalMovieDB.detectPersonalLevel()
personalMovieDB.addFilms()
personalMovieDB.showMyDB(personalMovieDB.privat)
personalMovieDB.writeYourGenres()

personalMovieDB.genres.forEach (function (item, index) {
    console.log(`Любимый жанр ${index + 1} - это ${item}`)
})