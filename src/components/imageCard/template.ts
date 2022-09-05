import { createTemplate } from '@lib/createTemplate'
import '@components/iconWithDesc'
import '@components/button'
import { IImageCardProps } from '@components/imageCard/types'

export const template = ({ title, description, backgroundURL }: IImageCardProps): HTMLTemplateElement => createTemplate(`  
    <article class='imageCard' style='background-image: url("${backgroundURL}")'>
      <div class='imageCardDescription'>
        <span class='imageCardTitle'>${title}</span>
        <p class='imageCardSubtitle'>
          ${description}
        </p>
      </div>
      <custom-button class='imageCardButton'>Read more</custom-button>
    </article>
`)
