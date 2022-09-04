export const addStyles = (shadowRoot: ShadowRoot, styles: CSSStyleSheet): void => {
  // @ts-expect-error: Add new styles
  shadowRoot.adoptedStyleSheets = [styles]
}
