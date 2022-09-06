import '@components/imageInfo'
import '@components/button'
import { createTemplate } from '@lib/createTemplate'

export const template = createTemplate(`
  <section class='sectionContacts'>
    <span class='sectionContactsTitle'>Need help with photography \n or videography?</span>
    <span class='sectionContactsSubtitle'>We're here for you!</span>
    <custom-button>Get in touch</custom-button>
  </section>
`)
