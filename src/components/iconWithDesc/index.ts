import { template } from './template'
import styles from './style.css'
import { addStyles } from '@lib/addStyles'
import { addTemplate } from '@lib/addTemplate'

class IconWithDescription extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    addTemplate(shadowRoot, template({
      name: this.getAttribute('name') ?? '',
      text: this.innerHTML
    }))

    addStyles(shadowRoot, styles)
  }
}

customElements.define('custom-icon-with-description', IconWithDescription)
