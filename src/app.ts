class PopUpInfo extends HTMLElement {
  constructor () {
    // Всегда первым делом вызывайте super() в конструкторе
    super()

    // далее следует функциональность элемента

    // Создание shadow root
    const shadow = this.attachShadow({ mode: 'open' })

    // Создание spans
    const wrapper = document.createElement('span')
    wrapper.setAttribute('class', 'wrapper')
    const icon = document.createElement('span')
    icon.setAttribute('class', 'icon')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    icon.setAttribute('tabindex', 0)
    const info = document.createElement('span')
    info.setAttribute('class', 'info')

    // Берём содержимое атрибута и добавляем его в span
    const text = this.getAttribute('text')
    info.textContent = text

    // Вставляем иконку
    let imgUrl
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img')
    } else {
      imgUrl = 'img/default.png'
    }
    const img = document.createElement('img')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    img.src = imgUrl
    icon.appendChild(img)

    // Создаём CSS для shadow dom
    const style = document.createElement('style')
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    style.textContent = '.wrapper {' +
    // CSS truncated for brevity

    // добавляем созданные элементы к shadow dom

    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    shadow.appendChild(style)
    shadow.appendChild(wrapper)
    wrapper.appendChild(icon)
    wrapper.appendChild(info)
  }
}

customElements.define('popup-info', PopUpInfo)
