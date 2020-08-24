import React from 'react'

export default function Square({dark, children}) {
  const fill = dark ? 'darkgray' : 'wheat'
  const stroke = dark ? 'wheat' : 'darkgray'
  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}
