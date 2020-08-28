import React from 'react'
import BuboOptions from '../pixelArt'
//may not end up using spritesheet, trying with still images at first
import Spritesheet from 'react-responsive-spritesheet'

import antennae from '../pixelArt/antennae.svg'

const CustomizableBubo = (props) => {
  let buboColor
  props.color ? (buboColor = props.color) : (buboColor = 'blank')
  let sparkleColor
  props.sparkle ? (sparkleColor = props.sparkle) : (sparkleColor = 'blank')
  let buboAccessory
  props.accessory ? (buboAccessory = props.accessory) : (buboAccessory = null)
  return (
    <>
      <div className="custom-bubo-container">
        <div
          className="accessory"
          style={{
            backgroundImage: `url(${BuboOptions.accessory[buboAccessory]})`,
          }}
        ></div>
        <div
          className="custom-bubo"
          style={{
            backgroundImage: `url(${BuboOptions.color[buboColor]})`,
          }}
        ></div>
        <Spritesheet
          image={`${BuboOptions.sparkles.yellow}`}
          widthFrame={320}
          heightFrame={320}
          steps={2}
          fps={5}
          className="sparkle"
        />
      </div>
    </>
  )
}

export default CustomizableBubo
