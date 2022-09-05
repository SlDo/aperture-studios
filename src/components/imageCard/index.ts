import { template } from './template'
import styles from './style.css'
import { addStyles } from '@lib/addStyles'
import { addTemplate } from '@lib/addTemplate'

class ImageCard extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    addTemplate(shadowRoot, template({
      title: this.getAttribute('title') ?? '',
      description: this.getAttribute('description') ?? '',
      backgroundURL: this.getAttribute('backgroundURL') ?? ''
    }))

    addStyles(shadowRoot, styles)
  }
}

customElements.define('custom-image-card', ImageCard)
