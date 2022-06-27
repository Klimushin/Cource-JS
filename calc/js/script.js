'use strict'

const inRub = document.querySelector('#rub'),
      inUsd = document.querySelector('#usd')

inRub.addEventListener('input', () => {
    const request = new XMLHttpRequest()

    request.open('GET', 'js/current.json')
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send()


    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response)
            inUsd.value = (+inRub.value / data.current.usd).toFixed(2)
        } else {
            inUsd.value = 'Wrong data'
        }
    })
})