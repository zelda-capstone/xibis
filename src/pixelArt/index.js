import GreenBubo from './green-bubo-face-only.svg'
import BlueBubo from './blue-bubo-face-only.svg'
import PurpleBubo from './purple-bubo-face-only.svg'
import YellowBubo from './yellow-bubo-face-only.svg'
import OrangeBubo from './orange-bubo-face-only.svg'
import RedBubo from './red-bubo-face-only.svg'
import BlankBubo from './blank-bubo-face-only.svg'
import YellowSparkles from './sparkles-yellow-better.png'
import antennae from './antennae.svg'
import hat from './hat.svg'
import glasses from './glasses.svg'
import monobrow from './monobrow.svg'

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
  },
}

export default BuboOptions
