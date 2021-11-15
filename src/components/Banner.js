import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core"

function Banner() {
  const [showSearch, setShowSearch] = useState (false);

  return (
    <div className='banner'  style={{ backgroundImage: `url('${  process.env.PUBLIC_URL + '/images/lucidcali.jpeg'}` }} >

      <div className='banner_search'>
          {showSearch && <h1>DATE PICKER</h1>}



        <Button onCllick={() =>
          setShowSearch(!showSearch)}
        className='banner_searchButton'
        variant='outlined'>Search Dates</Button>
      </div>

      <div className='banner_info'>
        <h2>Find parking space and charging anywhere you go</h2>


          <Button variant='outlined'>Search</Button>
      </div>
    </div>

  )
}

export default Banner
