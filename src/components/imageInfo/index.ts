import { template } from './template'
import styles from './style.css'
import { addStyles } from '@lib/addStyles'
import { addTemplate } from '@lib/addTemplate'

class ImageInfo extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    addTemplate(shadowRoot, template({
      excerpt: this.getAttribute('excerpt') ?? '',
      geo: this.getAttribute('geo') ?? '',
      iso: this.getAttribute('iso') ?? '',
      focus: this.getAttribute('focus') ?? ''
    }))

    addStyles(shadowRoot, styles)
  }
}

customElements.define('custom-image-info', ImageInfo)
