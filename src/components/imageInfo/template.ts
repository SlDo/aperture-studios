import { createTemplate } from '@lib/createTemplate'
import '@components/iconWithDesc'

export const template = createTemplate(`  
    <div class='imageInfo'>
      <custom-icon-with-description name='excerpt'>1/2000s</custom-icon-with-description>
      <custom-icon-with-description name='focus'>f/11</custom-icon-with-description>
      <custom-icon-with-description name='iso'>100</custom-icon-with-description>
      <custom-icon-with-description name='geo'>Iceland</custom-icon-with-description>
    </div>
`)
