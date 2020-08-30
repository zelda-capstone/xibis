import React from 'react'
import BuboOptions from '../pixelArt'
//may not end up using spritesheet, trying with still images at first
import Spritesheet from 'react-responsive-spritesheet'

//import antennae from '../pixelArt/antennae.svg'

const CustomizableBubo = (props) => {
  //console.log(props.personality)
  let personality
  props.personality ? (personality = props.personality) : (personality = ['test', 'test'])
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
        {/*
        <Spritesheet
          image={`${BuboOptions.sparkles.yellow}`}
          widthFrame={32}
          heightFrame={17}
          steps={2}
          fps={3}
          className="sparkle"
          style={{
            transform: 'scale(2)',
            marginTop: '1rem',
            marginLeft: '1rem',
          }}
        />
        */}
      </div>
      <div className='bubo-stats'>
          <span><strong>personality</strong>: {`${personality[0]}, ${personality[1]}`}</span>
          <span><strong>health</strong>: 100</span>
        </div>
    </>
  )
}

export default CustomizableBubo
