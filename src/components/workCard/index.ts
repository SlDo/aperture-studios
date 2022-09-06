import { addTemplate } from '@lib/addTemplate'
import { template } from './template'
import styles from './style.css'
import { addStyles } from '@lib/addStyles'

class WorkCardSection extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    addTemplate(shadowRoot, template({
      imageTitle: this.getAttribute('imageTitle') ?? '',
      imageDescription: this.getAttribute('imageDescription') ?? '',
      backgroundImageURL: this.getAttribute('backgroundImageURL') ?? '',
      excerpt: this.getAttribute('excerpt') ?? '',
      geo: this.getAttribute('geo') ?? '',
      iso: this.getAttribute('iso') ?? '',
      focus: this.getAttribute('focus') ?? ''
    }))

    addStyles(shadowRoot, styles)
  }
}

customElements.define('custom-work-card', WorkCardSection)
