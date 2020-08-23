import React from 'react'

const CustomizableBubo = (props) => {
  //console.log(props);
  return (
    <>
      <div className='custom-bubo-container'>
        <div className={props.accessory}></div>
        <div style={{background: props.color}} className='custom-bubo'>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      <div style={{background: props.sparkle}} className='sparkle'></div>
    </div>
  </>
  )
}

export default CustomizableBubo
