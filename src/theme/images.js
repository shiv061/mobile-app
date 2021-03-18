/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { Asset } from 'expo-asset'

// svg
import Logo from '../../assets/images/logo.svg'
import Tesla from '../../assets/images/tesla.svg'
import carBlue from '../../assets/images/carBlue.svg'
import carBlack from '../../assets/images/carBlack.svg'
import carBlueCut from '../../assets/images/carBlueCut.svg'
import icon1 from '../../assets/images/icon1.svg'
import icon2 from '../../assets/images/icon2.svg'
import icon3 from '../../assets/images/icon3.svg'

export const svgs = {
  logo: Logo,
  tesla: Tesla,
  carBlue,
  carBlack,
  carBlueCut,
  icon1,
  icon2,
  icon3,
}

export const data = {
  original: [],
  trending: [],
  popular: [],
  action: [],
}

// png/jpeg
export const images = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) =>
  Asset.fromModule(images[key]).downloadAsync(),
)
