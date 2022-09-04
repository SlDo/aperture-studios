export const createTemplate = (styles: string): HTMLTemplateElement => {
  const templateElement: HTMLTemplateElement = document.createElement('template')

  templateElement.innerHTML = styles

  return templateElement
}
