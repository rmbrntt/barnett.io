import theme from './theme'

const buttonThemeTemplate = {

    // Typography 
    fontFamily: [ ],
    fontSize: [ ],
    fontWeight: [ ],
    textTransform: [ ],
  
    // Palette
    colors: [ ],
    backgroundColors: [ ],
  
    // Borders
    borderColors: [ ],
    borderRadius: [ ],
    borderStyle: [ ],
    borderWidth: [ ],
    borderDirections: [ ],
  
    // Spacing
    paddingTop: [], 
    paddingLeft: [], 
    paddingBottom: [], 
    paddingRight: [], 
  
    // Hover states
    hoverColor: [ ],
    hoverBg: [ ],
    hoverBoxShadow: [ ],
    hoverBorderColor: [ ],
    hoverSize: [ ],
    
    // Focus states
    focusColor: [ ],
    focusBg: [ ],
    focusBorderColor: [ ],
    focusBoxShadow: [ ],
    focusSize: [ ],
  
    // Focus states
    activeColor: [ ],
    activeBg: [ ],
    activeBorderColor: [ ],
    activeBoxShadow: [ ],
    activeSize: [ ],
  
    transitionProperty: [ ],
    transitionDuration: [ ],
    transitionTimingFunction: [ ],
  }

const buttonTheme = {
  radii: theme.radii,
  space: [
    theme.space[3],
    theme.space[4],
  ],
  fontSize: theme.fontSize.slice(0,-8),
  fontFamily: theme.fontFamily[0],
  fontWeight: theme.fontWeight,
  lineHeight: 1,
  borderStyle: [
    theme.borderStyle[0],
    theme.borderStyle[1]
  ],
  borderWidth: theme.borderWidth,
  colors: theme.colors,
  backgroundColors: theme.colors,

  // hover, focus, active states
  
  hoverColor: [ 
    theme.colors[0].text, 
    theme.colors[1].text 
  ],
  hoverBgColor: [ 
    theme.colors[0].bg, 
    theme.colors[0].bg 
  ],
  focusColor: [ 
    theme.colors[1].text, 
    theme.colors[1].bg 
  ],
  textTransform: ['uppercase', 'capitalized'],
  transitionProperty: ['opacity', 'color', 'background-color'],
  transitionDuration: ['.2s'],
  transitionTimingFunction: ['ease-in'],
}

export default buttonTheme