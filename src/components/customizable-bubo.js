import React from 'react'

const CustomizableBubo = (props) => {
  //console.log(props);
  return (
    <>
      <div className='custom-bubo-container'>
        <div style={{background: props.color}} className='custom-bubo'>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
    </div>
  </>
  )
}

export default CustomizableBubo
