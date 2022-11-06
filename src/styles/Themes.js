export const dark = {
    navHeightDesktop: '5rem',
    navHeightMobile: '100vh',

    dark: '#160D1C',
    white: '#E6E6E6',
    pruple: '#8347AE',

    fontxs: '0.75em', //1em = 16px
    fontsm: '0.85em',
    fontmd: '1em',
    fontlg: '1.25em',
    fontxl: '2em',
    fontxxl: '3em',
    fontxxxl: '5em',
    fontBig: '10em',
}
export const opacityLayerVar = {
  initial:{
    opacity: 1,
    scaleY: 1,
  },
  animate:{
    opacity: 0,
    scaleY: 0,
    y: -`${window.innerHeight}`,

    transition:{
      type:"tween",
      duration: 2
    }
  }
}
export const logoVar = {
    large:{  
      scale: 1,
    },
    normal:{
      scale: .5,
      transition:{
        delay: 1,
        duration: 2,
        ease: 'easeInOut'
      }
    }
  }
  export const basicOpacityVar = {
    hid:{opacity:0}, 
    show:{opacity:1}
  }
  export const yNavFloatVar = {
    hid:{  
      opacity: 0,
      y: -50,
    },
    show:{
      opacity: 1,
      y: 0,
      transition:{
        duration: 0.75,
        ease: 'easeInOut'
      }
    }
  }