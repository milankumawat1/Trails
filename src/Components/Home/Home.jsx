import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Categories/Popular';
import Quick from '../QuickGateways/Quick';
import Tourism from '../Categories/Tourism';
import Oceania from '../Categories/Oceania';
import European from '../Categories/European';
import SouthEast from '../Categories/SouthEast';
import Scandinavia from '../Categories/Scandinavia';
import Guide from '../Categories/Guide';
import VacationAll from '../VacationForAll/VacationAll';
import Budget from '../Budget/Budget';
import Picadvertisement from '../Advertisement/Picadvertisement';
import Videosadvertisement from '../Advertisement/Videosadvertisement';
import Press from '../TabandTour/Press';
import Plane from '../Advertisement/Plane';
function Home() {
  return (
    <div> <Hero />
    <Popular />
    <Plane></Plane>
    <Quick />
    <VacationAll />
    <Videosadvertisement />
    <Tourism />
    <Oceania />
    <European />
    <Budget />
    <SouthEast />
    <Picadvertisement />
    <Scandinavia />
    <Guide />
    <Press />
  </div>
  )
}

export default Home