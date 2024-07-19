import React from 'react'

function Logo() {
  return (
    <div className='logo-name'>
        <img src="data:image/png;base64,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" alt="logo" className='logo' />
    </div>
  )
}

export default Logo