import { template } from './template'
import styles from './style.css'
import { addStyles } from '@lib/addStyles'
import { addTemplate } from '@lib/addTemplate'

class FooterNavLink extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    addTemplate(shadowRoot, template({
      href: this.getAttribute('href') ?? '',
      text: this.innerHTML
    }))

    addStyles(shadowRoot, styles)
  }
}

customElements.define('custom-footer-nav-link', FooterNavLink)
