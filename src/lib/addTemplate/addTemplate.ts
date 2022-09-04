export const addTemplate = (shadowRoot: ShadowRoot, template: HTMLTemplateElement): void => {
  shadowRoot.append(template.content.cloneNode(true))
}
