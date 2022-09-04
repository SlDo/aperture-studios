export const addScript = (shadowRoot: ShadowRoot, scriptString: string): void => {
  const script = document.createElement('script')
  script.textContent = scriptString

  shadowRoot.appendChild(script)
}
