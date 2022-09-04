import { template } from './template'
import styles from './style.css'
import { addStyles } from '@lib/addStyles'
import { addTemplate } from '@lib/addTemplate'
import './scripts/scrollChangeColor'

class Header extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    addTemplate(shadowRoot, template)
    addStyles(shadowRoot, styles)
  }
}

customElements.define('custom-header', Header)
