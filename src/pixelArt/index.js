import GreenBubo from './green-bubo-face-only.svg'
import BlueBubo from './blue-bubo-face-only.svg'
import PurpleBubo from './purple-bubo-face-only.svg'
import YellowBubo from './yellow-bubo-face-only.svg'
import OrangeBubo from './orange-bubo-face-only.svg'
import RedBubo from './red-bubo-face-only.svg'
import BlankBubo from './blank-bubo-face-only.svg'
import YellowSparkles from './sparkles-yellow-better.png'
import antennae from './accessories/antennae.svg'
import hat from './accessories/hat.svg'
import glasses from './accessories/glasses.svg'
import monobrow from './accessories/monobrow.svg'
import bow from './accessories/bow.svg'
import sunglasses from './accessories/sunglasses.svg'
import eyestalk from './accessories/eyestalk.svg'

//also include other options, like antennae, sparkles, etc
const BuboOptions = {
  color: {
    blank: BlankBubo,
    green: GreenBubo,
    blue: BlueBubo,
    purple: PurpleBubo,
    yellow: YellowBubo,
    orange: OrangeBubo,
    red: RedBubo,
  },
  sparkles: {
    yellow: YellowSparkles,
  },
  accessory: {
    antennae,
    hat,
    glasses,
    monobrow,
    bow,
    sunglasses,
    eyestalk,
  },
}

export default BuboOptions
