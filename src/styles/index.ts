import normalize from './normalize.css'
import fonts from './fonts.css'
import variables from './variables.css'
import globalStyles from './style.css'

// @ts-expect-error: import styles
document.adoptedStyleSheets = [normalize, fonts, variables, globalStyles]
