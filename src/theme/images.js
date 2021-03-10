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
import card1 from '../../assets/images/Rectangle 2-1.svg'
import card2 from '../../assets/images/Rectangle 2-2.svg'
import card3 from '../../assets/images/Rectangle 2-3.svg'
import card4 from '../../assets/images/Rectangle 2.1-1.svg'
import card5 from '../../assets/images/Rectangle 2.1-2.svg'
import card6 from '../../assets/images/Rectangle 2.1-3.svg'
import card7 from '../../assets/images/Rectangle 2.1.svg'
import card8 from '../../assets/images/Rectangle 2.2-1.svg'
import card9 from '../../assets/images/Rectangle 2.2-2.svg'
import card10 from '../../assets/images/Rectangle 2.2-3.svg'
import card11 from '../../assets/images/Rectangle 2.2.svg'
import card12 from '../../assets/images/Rectangle 2.3-1.svg'
import card13 from '../../assets/images/Rectangle 2.3-2.svg'
import card14 from '../../assets/images/Rectangle 2.3-3.svg'
import card15 from '../../assets/images/Rectangle 2.3.svg'
import card16 from '../../assets/images/Rectangle 2.svg'
import back from '../../assets/images/back.svg'
import plus from '../../assets/images/plus.svg'
import thumb from '../../assets/images/thumb.svg'
import share from '../../assets/images/share.svg'
import play from '../../assets/images/play.svg'
import circle1 from '../../assets/images/Ellipse-1.svg'
import circle2 from '../../assets/images/Ellipse-2.svg'
import circle3 from '../../assets/images/Ellipse.svg'
import circle4 from '../../assets/images/Group 3.svg'

export const svgs = {
  logo: Logo,
  netflix: Netflix,
  home: Home,
  search: Search,
  setting: Setting,
  down: Download,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  back,
  plus,
  thumb,
  share,
  play,
  circle1,
  circle2,
  circle3,
  circle4,
}

export const data = {
  original: [
    {
      title: 'card1',
      image: card1,
    },
    {
      title: 'card2',
      image: card2,
    },
    {
      title: 'card3',
      image: card3,
    },
    {
      title: 'card4',
      image: card4,
    },
  ],
  trending: [
    {
      title: 'card5',
      image: card5,
    },
    {
      title: 'card6',
      image: card6,
    },
    {
      title: 'card7',
      image: card7,
    },
    {
      title: 'card8',
      image: card8,
    },
  ],
  popular: [
    {
      title: 'card9',
      image: card9,
    },
    {
      title: 'card10',
      image: card10,
    },
    {
      title: 'card11',
      image: card11,
    },
    {
      title: 'card12',
      image: card12,
    },
  ],
  action: [
    {
      title: 'card13',
      image: card13,
    },
    {
      title: 'card14',
      image: card14,
    },
    {
      title: 'card15',
      image: card15,
    },
    {
      title: 'card16',
      image: card16,
    },
  ],
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
