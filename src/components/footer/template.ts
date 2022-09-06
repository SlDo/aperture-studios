import '@components/logo'
import './components/nav'

import { createTemplate } from '@lib/createTemplate'

export const template = createTemplate(`  
    <footer class='footer'>
      <div class='footerMain'>
        <div class='footerMainInfo'>
           <custom-logo></custom-logo>
           <span class='footerMainDescription'>Photographers & videographers capturing the world around us.</span>
        </div>
        <div class='footerNavSection'>
          <custom-footer-nav>
            <custom-footer-nav-link>Product Photography</custom-footer-nav-link>
            <custom-footer-nav-link>Architecture Photography</custom-footer-nav-link>
            <custom-footer-nav-link>Drone Photography</custom-footer-nav-link>
            <custom-footer-nav-link>Wildlife Photography</custom-footer-nav-link>
          </custom-footer-nav>
          <custom-footer-nav>
            <custom-footer-nav-link>Gear cage</custom-footer-nav-link>
            <custom-footer-nav-link>Featured images</custom-footer-nav-link>
            <custom-footer-nav-link>Contact</custom-footer-nav-link>
            <custom-footer-nav-link>Style guide</custom-footer-nav-link>
            <custom-footer-nav-link>Instructions</custom-footer-nav-link>
            <custom-footer-nav-link>Changelog</custom-footer-nav-link>
          </custom-footer-nav>
        </div>
      </div>
      <div class='footerLine'></div>
      <span class='footerCopyright'>© Aperture Photography, Inc. All rights reserved. Licensing</span>
    </footer>
`)
