import '@components/logo'
import './components/nav'
import '@components/button'

import { createTemplate } from '@lib/createTemplate'

export const template = createTemplate(`  
    <header class='header' data-scroll-color='change'>
      <div class='headerLogoWrapper'>
        <custom-logo></custom-logo>
      </div>
      <custom-header-nav></custom-header-nav>
      <custom-button class='headerButton' text='Get template'></custom-button>
    </header>
`)
