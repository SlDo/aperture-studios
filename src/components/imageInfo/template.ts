import { createTemplate } from '@lib/createTemplate'
import '@components/iconWithDesc'
import { IImageInfoProps } from '@components/imageInfo/types'

export const template = ({ excerpt, geo, iso, focus }: IImageInfoProps): HTMLTemplateElement => createTemplate(`  
    <div class='imageInfo'>
      <custom-icon-with-description name='excerpt'>${excerpt}</custom-icon-with-description>
      <custom-icon-with-description name='focus'>${focus}</custom-icon-with-description>
      <custom-icon-with-description name='iso'>${iso}</custom-icon-with-description>
      <custom-icon-with-description name='geo'>${geo}</custom-icon-with-description>
    </div>
`)
