import { createTemplate } from '@lib/createTemplate'
import { getIcon } from '@lib/getIcon'

export const template = (name: string): HTMLTemplateElement => createTemplate(getIcon(name))
