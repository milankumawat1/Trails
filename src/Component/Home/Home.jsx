import React from 'react'
import Banner from '../Banner/Banner'
import Popular from '../Categories/Popular'
import Plane from '../Advertisement/Plane'
import Quick from '../QuickGateways/Quick'
import Vacation from '../Vacation/Vacation'


function Home() {
  return (
    <div>
        <Popular/>
        <Plane/>
        <Quick/>
        <Vacation/>
        
    </div>
  )
}

export default Home
