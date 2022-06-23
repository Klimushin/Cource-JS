const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')


if (numbersOfFilms < 10) {
    alert('Просмотрено мало фильмов')
} else if (10 <= numbersOfFilms < 30) {
    alert('Вы классический зритель')
} else if (numbersOfFilms >= 30) {
    alert('Вы киноман')
} else {
    alert('Произошла ошибка')       
}

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

retry: for (let i = 0; i < 2; i++) {
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?', '')
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b
    } else {
        i--
    }
}


console.log(personalMovieDB)