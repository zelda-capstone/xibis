import GreenBubo from './green-bubo-face-only.svg'
import BlueBubo from './blue-bubo-face-only.svg'
import PurpleBubo from './purple-bubo-face-only.svg'
import BlankBubo from './blank-bubo-face-only.svg'
import YellowSparkles from './sparkles-yellow-better.png'
import antennae from './antennae.svg'
import hat from './hat.svg'
import glasses from './glasses.svg'

//also include other options, like antennae, sparkles, etc
const BuboOptions = {
  color: {
    blank: BlankBubo,
    green: GreenBubo,
    blue: BlueBubo,
    purple: PurpleBubo,
  },
  sparkles: {
    yellow: YellowSparkles,
  },
  accessory: {
    antennae,
    hat,
    glasses,
  },
}

export default BuboOptions
