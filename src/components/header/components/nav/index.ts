import { template } from './template'
import styles from './style.css'
import { addStyles } from '@lib/addStyles'
import { addTemplate } from '@lib/addTemplate'

class HeaderNav extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    addTemplate(shadowRoot, template)
    addStyles(shadowRoot, styles)
  }
}

customElements.define('custom-header-nav', HeaderNav)
