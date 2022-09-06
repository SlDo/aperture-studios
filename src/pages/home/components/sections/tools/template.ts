import '@components/imageInfo'
import '@components/button'
import { createTemplate } from '@lib/createTemplate'

export const template = createTemplate(`
  <section class='sectionTools'>
    <div class='sectionToolsTextWrapper'>
      <div class='sectionToolsDescription'>
        <span class='sectionToolsSubtitle'>The Gear cage</span>
        <h1 class='sectionToolsTitle'>The tools that we use.</h1>
        <p class='sectionToolsText'>
          The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.
        </p>
      </div>
      <custom-button class='sectionToolsButton'>Check</custom-button>
    </div>
    <div class='sectionToolsImage'>
      <custom-image-info class='sectionMountainImageInfo' excerpt='0.8' focus='f/5,6' iso='100' geo='Sweden'></custom-image-info>
    </div>
  </section>
`)
