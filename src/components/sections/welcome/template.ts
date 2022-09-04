import '@components/imageInfo'
import { createTemplate } from '@lib/createTemplate'

export const template = createTemplate(`
  <section class='sectionWelcome'>
    <div class='sectionWelcomeDescription'>
      <span class='sectionWelcomeSubtitle'>Photographer & Filmmaker</span>
      <h1 class='sectionWelcomeTitle'>Aperture Studios</h1>
      <p class='sectionWelcomeText'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum 
        tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
      </p>
    </div>
    <custom-image-info class='sectionImageInfo'></custom-image-info>
  </section>
`)
