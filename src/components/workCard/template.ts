import '@components/imageInfo'
import { createTemplate } from '@lib/createTemplate'
import { IWorkCardProps } from '@components/workCard/types'

export const template = ({ imageTitle, imageDescription, backgroundImageURL, excerpt, geo, iso, focus }: IWorkCardProps): HTMLTemplateElement => createTemplate(`
  <section class='workCard' style='background-image: url(${backgroundImageURL});'>
    <div class='workCardDescription'>
      <h1 class='workCardTitle'>${imageTitle}</h1>
      <p class='workCardSubtitle'>
        ${imageDescription}
      </p>
    </div>
    <custom-image-info class='workCardImageInfo' excerpt='${excerpt}' focus='${focus}' iso='${iso}' geo='${geo}'></custom-image-info>
  </section>
`)
