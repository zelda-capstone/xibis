import React from 'react'
import BuboOptions from '../pixelArt'
import BlueBuboFace from '../pixelArt/blue-bubo-face-only.svg'
import BlueBuboSprites from '../pixelArt/blue-bubo-base.png'
import Spritesheet from 'react-responsive-spritesheet'

const CustomizableBubo = (props) => {
  //console.log(props);
  const testFace = BuboOptions.color.blue
  console.log(testFace)
  return (
    <>
      <div className="custom-bubo-container">
        <div className={props.accessory}></div>
        <div
          className="custom-bubo"
          style={{
            backgroundImage: `url(${testFace})`,
          }}
        ></div>
        <div style={{background: props.sparkle}} className="sparkle"></div>
      </div>
    </>
  )
}

export default CustomizableBubo
