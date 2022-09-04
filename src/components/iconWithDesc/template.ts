import { createTemplate } from '@lib/createTemplate'

import '@components/icon'
import { IIconWithDescriptionProps } from '@components/iconWithDesc/types'

export const template = ({ name, text }: IIconWithDescriptionProps): HTMLTemplateElement => createTemplate(`
  <span class='wrapper'>
    <custom-icon name='${name}'></custom-icon>
    <span class='text'>
      ${text}
    </span>
  </span>
`)
