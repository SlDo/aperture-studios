import { createTemplate } from '@lib/createTemplate'

export const template = (text: string): HTMLTemplateElement => createTemplate(`
  <button class='button'>
    ${text}
  </button>
`)
