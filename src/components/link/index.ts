import { template } from './template'
import styles from './style.css'
import { addStyles } from '@lib/addStyles'
import { addTemplate } from '@lib/addTemplate'
import { TButtonSizes } from './types'

class Link extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    addTemplate(shadowRoot, template({
      text: this.innerHTML ?? 'Link text',
      size: (this.getAttribute('size') as TButtonSizes) ?? 'md',
      href: this.getAttribute('href') ?? '#'
    }))

    addStyles(shadowRoot, styles)
  }
}

customElements.define('custom-link', Link)
