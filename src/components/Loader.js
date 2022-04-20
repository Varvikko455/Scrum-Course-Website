import React from 'react'
import '../scss/components/_loader.scss';

function Loader() {
  return (
    <div className="loader">
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader
