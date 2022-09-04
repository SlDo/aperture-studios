import { ILinkProps } from './types'
import { createTemplate } from '@lib/createTemplate'

export const template = ({ text, size, href }: ILinkProps): HTMLTemplateElement => createTemplate(`
  <a class='link' href='${href}' data-button-size='${size}'>${text}</a>
`)
