import React from 'react'
import '../VacationForAll/vacationall.css'
import vacation from '../../Assets/travellingvariable.avif'

function VacationAll() {
  return (
    <div className='vacation'>
        <div className="vacation-inner-container flex">
            <h2>VACATION FOR ALL</h2>
            <h3 style={{color: "red"}}>Travellers</h3>

            <div className="vacation-images flex">

                <div className="vacation-image-cards flex">

                    <div className="vacation-card flex">
                    <img src={vacation} alt="" className="vacation-image" />
                    <div className="vacation-desc-container">
                        <p>Honeymoon</p>
                    </div>
                    </div>

                    <div className="vacation-card flex">
                    <img src={vacation} alt="" className="vacation-image" />
                    <div className="vacation-desc-container">
                        <p>Honeymoon</p>
                    </div>
                    </div>

                    <div className="vacation-card flex">
                    <img src={vacation} alt="" className="vacation-image" />
                    <div className="vacation-desc-container">
                        <p>Honeymoon</p>
                    </div>
                    </div>

                    <div className="vacation-card flex">
                    <img src={vacation} alt="" className="vacation-image" />
                    <div className="vacation-desc-container">
                        <p>Honeymoon</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VacationAll