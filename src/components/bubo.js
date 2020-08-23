import React from 'react'

const Bubo = (props) => {
  return (
    <>
      <div className='bubo-container'>
        <div
          draggable
          className='bubo'
          style={{...props}}>
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

export default Bubo
