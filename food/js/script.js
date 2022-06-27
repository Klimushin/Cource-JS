window.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items')

  function hideTabContent() {
      tabsContent.forEach(item => {
          item.style.display = 'none'
      })
      tabs.forEach(item => {
          item.classList.remove('tabheader__item_active')
      })
  }

  function showTabContent(item = 0) {
      tabsContent[item].style.display = 'block'
      tabs[item].classList.add('tabheader__item_active')
  }

  hideTabContent()
  showTabContent()

  tabsParent.addEventListener('click', (event) => {
      const target = event.target
      if (target && target.classList.contains('tabheader__item')) {
          tabs.forEach((item, index) => {
            if (target == item) {
              hideTabContent()
              showTabContent(index)
            }
          })
      }
  })

  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden'
    })
  })
  
  function closeModal () {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
  }

  modalCloseBtn.addEventListener('click', closeModal)

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
     closeModal()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal()
    }
  })


  // Class for product card

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src
      this.alt = alt
      this.title = title
      this.descr = descr
      this.price = price
      this.classes = classes
      this.parent = document.querySelector(parentSelector)
      this.transfer = 27
      this.changeToUAH()
    }
    
    changeToUAH() {
      this.price = this.price * this.transfer
    }
    
    render() {
      const element = document.createElement('div')
      if (this.classes.length === 0) {
        this.element = 'menu__item'
        element.classList.add(this.element)
      } else {
        this.classes.forEach(className => element.classList.add(className))
      }
      element.innerHTML = `
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>`
      this.parent.append(element)
    }
  }

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container'
  ).render()

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container'
  ).render()

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container'
  ).render()
  
})
