import React from 'react'
import BuboOptions from '../pixelArt'
import BlueBuboFace from '../pixelArt/blue-bubo-face-only.svg'
import BlueBuboSprites from '../pixelArt/blue-bubo-base.png'
import Spritesheet from 'react-responsive-spritesheet'

const CustomizableBubo = (props) => {
  let buboColor
  props.color ? (buboColor = props.color) : (buboColor = 'blank')
  return (
    <>
      <div className="custom-bubo-container">
        <div className={props.accessory}></div>
        <div
          className="custom-bubo"
          style={{
            backgroundImage: `url(${BuboOptions.color[buboColor]})`,
          }}
        ></div>
        <div style={{background: props.sparkle}} className="sparkle"></div>
      </div>
    </>
  )
}

export default CustomizableBubo
