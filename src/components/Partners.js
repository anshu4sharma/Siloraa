import React from 'react'
import './Partners.css'
import partners from './partners.png'
function Partners() {
  return (
    <>
<div className='partner'>
<h1>Partners</h1>

<div id='inside_partner'>

    <img loading='lazy' src={partners} alt="img" id='part' />
</div>
</div>


    </>
  )
}

export default Partners