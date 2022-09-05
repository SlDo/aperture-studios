import '@components/imageInfo'
import '@components/imageCard'
import { createTemplate } from '@lib/createTemplate'

export const template = createTemplate(`
  <section class='sectionWork'>
    <header class='sectionWorkHeader'>
      <h2 class='sectionWorkTitle'>What we do.</h2>
      <p class='sectionWorkSubtitle'>The areas that we're specialized in.</p>
    </header>
    <div class='sectionWorkImageCards'>
      <custom-image-card backgroundURL='assets/images/img.png' title='Product Photography' description='Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.'></custom-image-card>
      <custom-image-card backgroundURL='assets/images/img_1.png' title='Architecture Photography' description='Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.'></custom-image-card>
      <custom-image-card backgroundURL='assets/images/img_2.png' title='Drone Photography' description='Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.'></custom-image-card>
      <custom-image-card backgroundURL='assets/images/img_3.png' title='Wildlife Photography' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.'></custom-image-card>
    </div>
  </section>
`)
