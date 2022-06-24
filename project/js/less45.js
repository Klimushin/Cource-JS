/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = document.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]')

addForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let addFilm = addInput.value
    const fav = checkbox.checked 
    if (addFilm) {
        if (addFilm.length > 15) {
            addFilm = `${addFilm.slice(0, 15)}...`
        }
        movieDB.movies.push(addFilm)
        movieDB.movies.sort()
        createMovieList(movieDB.movies, movieList)
    }
    event.target.reset()
})

const createMovieList = (films, parent) => {
    parent.innerHTML = ''
    films.forEach((film, index) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${index + 1} ${film}
            <div class="delete"></div>
        </li>`
    })
    document.querySelectorAll('.delete').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove()
            films.splice(index, 1)
            createMovieList(films, parent)
        })
    })
}

createMovieList(movieDB.movies, movieList)

genre.innerHTML = 'ДРАММА'

promo.forEach(item => {
    item.remove()
})