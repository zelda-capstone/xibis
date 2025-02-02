import React from 'react'
import BuboOptions from '../pixelArt'

const CustomizableBubo = (props) => {
  let className
  props.hover
    ? (className = 'custom-bubo-container')
    : (className = 'custom-bubo-container no-hover')
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
      <div className={className}>
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
      </div>
    </>
  )
}

export default CustomizableBubo
