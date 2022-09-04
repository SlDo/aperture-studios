import '@components/link'

import { createTemplate } from '@lib/createTemplate'

export const template = createTemplate(`
  <nav class='headerNav'>
    <ul class='headerNavList'>
      <li><custom-link href='#'>Business areas</custom-link></li>
      <li><custom-link href='#'>Featured images</custom-link></li>
      <li><custom-link href='#'>Gear cage</custom-link></li>
      <li><custom-link href='#'>Gear cageContact</custom-link></li>
    </ul>
  </nav>
`)
