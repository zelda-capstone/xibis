import React from 'react'

const SelectTrait = (props) => {
  return (
    <button
      className='button'
      onClick={props.handleClick}
      value={props.value}>
        {props.value}
    </button>
  )
}

export default SelectTrait
