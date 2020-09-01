import React from 'react'
import BuboOptions from '../pixelArt'


const CustomizableBubo = (props) => {
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
    </>
  )
}

export default CustomizableBubo
