import '@components/imageInfo'
import { createTemplate } from '@lib/createTemplate'

export const template = createTemplate(`
  <section class='sectionMountain'>
    <div class='sectionMountainDescription'>
      <h1 class='sectionMountainTitle'>Sunset at Mount Fuji</h1>
      <p class='sectionMountainSubtitle'>
        Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.
      </p>
    </div>
    <custom-image-info class='sectionMountainImageInfo' excerpt='1' focus='f/16' iso='400' geo='Japan'></custom-image-info>
  </section>
`)
