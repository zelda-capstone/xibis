import React from 'react'
import BuboOptions from '../pixelArt'
//may not end up using spritesheet, trying with still images at first
//import Spritesheet from 'react-responsive-spritesheet'

//import antennae from '../pixelArt/antennae.svg'

const CustomizableBubo = (props) => {
  //console.log(props.personality)
  let personality
  props.personality
    ? (personality = props.personality)
    : (personality = ['test', 'test'])
  let buboColor
  props.color ? (buboColor = props.color) : (buboColor = 'blank')
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
      </div>
      <div className="bubo-stats">
        <span>
          <strong>personality</strong>: {`${personality[0]}, ${personality[1]}`}
        </span>
        <span>
          <strong>health</strong>: 100
        </span>
      </div>
    </>
  )
}

export default CustomizableBubo
