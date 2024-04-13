import React from 'react'
import '../Budget/budget.css'
import '../VacationForAll/vacationall.css'
import bud from '../../Assets/budget.avif'
import bud2 from '../../Assets/budget2.avif'
import bud3 from '../../Assets/budget3.avif'
import bud4 from '../../Assets/budget4.avif'
import bud5 from '../../Assets/budget5.avif'

function Budget() {
  return (
    <div className='budget'>
      <div className="budget-inner-container flex">
        <div className="upperheading">
          <h2>HOLIDAYS FOR EVERY</h2>
          <h3 className='trav'>budget</h3>
        </div>

        <div className="image-container">
          <div className="budget-image-cards flex">
            <img src={bud} alt="" className="budget-image" />
            <img src={bud2} alt="" className="budget-image" />
            <img src={bud3} alt="" className="budget-image" />
            <img src={bud4} alt="" className="budget-image" />
            <img src={bud5} alt="" className="budget-image" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Budget