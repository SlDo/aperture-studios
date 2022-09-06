import '@components/imageInfo'
import '@components/button'
import { createTemplate } from '@lib/createTemplate'

export const template = createTemplate(`
  <section class='sectionClients'>
    <div class='sectionClientsHeading'>
      <h3 class='sectionClientsTitle'>Past clients</h3>
      <span class='sectionClientsSubtitle'>Trusted by your favourite companies</span>
    </div>
    <div class='sectionClientsPartners'>
      <img src='assets/images/logo/1.svg'>
      <img src='assets/images/logo/2.svg'>
      <img src='assets/images/logo/3.svg'>
      <img src='assets/images/logo/4.svg'>
      <img src='assets/images/logo/5.svg'>
    </div>
  </section>
`)
