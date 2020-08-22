import React from 'react'

const Twinkle = (props) => {
  return (
    <>
      <div className="space-sky">
        <div className="stars"></div>
        <div className="twinkling"></div>
        {
          props.clouds ?   <div className="clouds"></div> : null
        }
      </div>
    </>
  )
}

export default Twinkle
