import * as Font from 'expo-font'

export const fonts = {
  mulish: {
    regular: 'mulish_regular',
    regularItalic: 'mulish_regular_italic',
    semiBold: 'mulish_semiBold',
    semiBoldItalic: 'mulish_semiBold_italic',
    bold: 'mulish_bold',
    boldItalic: 'mulish_bold_italic',
  },
}

// fonts preloading
export const fontsAll = [
  {
    mulish_regular: require('../../assets/fonts/Mulish-Medium.ttf'),
  },
  {
    mulish_regular_italic: require('../../assets/fonts/Mulish-MediumItalic.ttf'),
  },
  {
    mulish_semiBold: require('../../assets/fonts/Mulish-SemiBold.ttf'),
  },
  {
    mulish_semiBold_italic: require('../../assets/fonts/Mulish-SemiBoldItalic.ttf'),
  },
  {
    mulish_bold: require('../../assets/fonts/Mulish-Bold.ttf'),
  },
  {
    mulish_bold_italic: require('../../assets/fonts/Mulish-BoldItalic.ttf'),
  },
]
export const fontAssets = fontsAll.map((x) => Font.loadAsync(x))
