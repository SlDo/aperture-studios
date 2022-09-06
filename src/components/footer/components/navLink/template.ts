import '@components/logo'

import { createTemplate } from '@lib/createTemplate'
import { INavLinkProps } from '@components/footer/components/navLink/types'

export const template = ({ href, text }: INavLinkProps): HTMLTemplateElement => createTemplate(`  
    <li>
      <a class='navLink' href='${href}'>${text}</a>
    </li>
`)
