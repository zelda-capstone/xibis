import React from 'react'
import BuboOptions from '../pixelArt'
import BlueBuboFace from '../pixelArt/blue-bubo-face-only.svg'

const CustomizableBubo = (props) => {
  //console.log(props);
  const testBuboColor = 'blue'
  const testBubo = BuboOptions.color.blue
  return (
    <>
      <div className="custom-bubo-container">
        <div className={props.accessory}></div>
        <div
          style={{
            backgroundImage: `url(${BlueBuboFace})`,
            backgroundSize: 'contain',
          }}
          className="custom-bubo"
        ></div>
        <div style={{background: props.sparkle}} className="sparkle"></div>
      </div>
    </>
  )
}

export default CustomizableBubo
