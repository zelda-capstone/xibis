import React from 'react'
//import { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
  //const [isShown, setIsShown] = useState(false);

  return (
    <>
    <div id="menu" >
      {/* <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
          <img src=""/>
      </button>
      {isShown && (
        <div>
          <Link to='hint'><div>?</div></Link>
          <Link to='/map'><div>Map</div></Link>
          <Link to={next}><div>Next</div></Link>
        </div>
      )} */}

        {/* <Link to='hint'><div>?</div></Link> */}
        <Link to='/map'><div>Map</div></Link>
        <Link to='/'><div>Start Over</div></Link>
    </div>
    </>
  )
}

export default Menu
