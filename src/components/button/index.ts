import { template } from './template'
import styles from './style.css'
import { addStyles } from '@lib/addStyles'
import { addTemplate } from '@lib/addTemplate'

class Button extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    addTemplate(shadowRoot, template(this.getAttribute('text') ?? 'Button'))
    addStyles(shadowRoot, styles)
  }
}

customElements.define('custom-button', Button)
