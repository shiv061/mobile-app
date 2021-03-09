/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { Asset } from 'expo-asset'

// svg
import Logo from '../../assets/images/logo.svg'
import Netflix from '../../assets/images/netflix.svg'
import Home from '../../assets/images/home.svg'
import Search from '../../assets/images/search.svg'
import Setting from '../../assets/images/setting.svg'
import Download from '../../assets/images/down.svg'

export const svgs = {
  logo: Logo,
  netflix: Netflix,
  home: Home,
  search: Search,
  setting: Setting,
  down: Download,
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
