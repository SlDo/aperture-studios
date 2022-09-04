import { template } from './template'
import styles from './style.css'
import { addStyles } from '@lib/addStyles'
import { addTemplate } from '@lib/addTemplate'

class Icon extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    addTemplate(shadowRoot, template(this.getAttribute('name') ?? ''))
    addStyles(shadowRoot, styles)
  }
}

customElements.define('custom-icon', Icon)
