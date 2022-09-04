document.addEventListener('scroll', () => {
  const header = document.querySelector('custom-header')?.shadowRoot?.querySelector('header')
  const scrollTop = document.documentElement.scrollTop

  scrollTop > 0 ? header?.classList.add('scroll') : header?.classList.remove('scroll')
})
