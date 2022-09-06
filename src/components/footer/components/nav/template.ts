import '@components/logo'
import '../navLink'

import { createTemplate } from '@lib/createTemplate'

export const template = (children: any): HTMLTemplateElement => createTemplate(`  
    <nav class='footerNav'>
      <h4 class='footerNavTitle'>Business areas</h4>
      <ul class='footerNavList'>
        ${children}
      </ul>
    </nav>
`)
