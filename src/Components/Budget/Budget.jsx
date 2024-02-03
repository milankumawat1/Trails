import React from 'react'
import '../Budget/budget.css'
import '../VacationForAll/vacationall.css'
import bud from '../../Assets/budget.avif'

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
                   

                   
                    <img src={bud} alt="" className="budget-image" />
                

                    
                    <img src={bud} alt="" className="budget-image" />
                

                    
                    <img src={bud} alt="" className="budget-image" />

                    <img src={bud} alt="" className="budget-image" />
                    
                </div>
            </div>
            </div>
       
    </div>
  )
}

export default Budget