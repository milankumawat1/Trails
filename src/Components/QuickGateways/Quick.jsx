import React from 'react'
import '../QuickGateways/quick.css'
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import hotel1 from '../../Assets/hotel1.webp'
import hotel2 from '../../Assets/hotel2.webp'
import hotel3 from '../../Assets/hotel3.webp'
import hotel4 from '../../Assets/hotel4.webp'
import hotel5 from '../../Assets/hotel5.webp'
import hotel6 from '../../Assets/hotel6.webp'
const images=[
  {
    img1: hotel4,
    placename1: '',
    price1: '',
    img2: hotel2,
    placename2: '',
    price2: '',
    img3: hotel3,
    placename3: '',
    price3: '',
    img4: hotel1, 
    placename4: '',
    price4: '',
    img5: hotel5, 
    placename5: '',
    price5: '',
    img6: hotel6, 
    placename6: '',
    price6: ''
  }
]


function Quick() {
  // const [currentIndex, setCurrentIndex]= useState(0);
  
  // const nextSlide=()=>{
  //   setCurrentIndex((prevIndex)=>{
  //     if(images.length!==currentIndex){
  //      return  prevIndex+1;
  //     }
  //     else
  //     return;
  //   });

  // }

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1) % images.length);
  // };
  
  return (
    <div className='quickgateways'>
       <div className="quick-upper flex">
                <h2>Luxury Villas<br></br></h2>
                {/* <div className="popular-destination-upper-icons flex"> */}
                    {/* <FaArrowAltCircleLeft className={`arrow ${currentIndex===0?'disable':''}`} onClick={prevSlide}></FaArrowAltCircleLeft>
                    <FaArrowAltCircleRight className={`arrow ${currentIndex===images.length?'disable':''}`} onClick={nextSlide}></FaArrowAltCircleRight> */}

                    {/* <FaArrowAltCircleLeft className='disable' onClick={prevSlide}></FaArrowAltCircleLeft>
                    <FaArrowAltCircleRight className='disable' onClick={nextSlide}></FaArrowAltCircleRight> */}
                {/* </div> */}
            </div>

            <div className='quick-slider-main-wrap'>
            {/* <div className="quick-slider-wrapper flex" style={{transform:`translateX(-${currentIndex*420}px)`}}> */}
            <div className="quick-slider-wrapper flex">
              {
                images.map((imagesObject, index)=>(
                  <div key={index} className='quick-card-outer flex'>                    
                  <div className="first-card flex">
                    <a href='https://www.airbnb.co.uk/rooms/967329493186796393?adults=1&viralityEntryPoint=1&s=76&unique_share_id=C51AF008-BEAC-4D0C-9551-CE6FC9FA7C4F&_branch_match_id=1277319689636390144&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zKS9LLTdUPTHYMcPZxdCt2TwIAIHj%2BDxsAAAA%3D&source_impression_id=p3_1705774972_w%2FeapWyfPcN1nws3'>
                    <div className="quick-card-image-container">
                     <img  src={imagesObject.img1} alt="img" className="firstimage" />
                     <div className="quick-desc">
                      <h3>{imagesObject.placename1}</h3>
                      <p>{imagesObject.price1}</p>
                     </div>
                     </div>
                     </a>
    
                     <a href='https://www.airbnb.co.uk/rooms/967329493186796393?adults=1&viralityEntryPoint=1&s=76&unique_share_id=C51AF008-BEAC-4D0C-9551-CE6FC9FA7C4F&_branch_match_id=1277319689636390144&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zKS9LLTdUPTHYMcPZxdCt2TwIAIHj%2BDxsAAAA%3D&source_impression_id=p3_1705774972_w%2FeapWyfPcN1nws3'>
                    <div className="quick-card-image-container">
                     <img src={imagesObject.img2} alt="img" className="secondimage" />
                     <div className="quick-desc">
                      <h3>{imagesObject.placename2}</h3>
                      <p>{imagesObject.price2}</p>
                     </div>
                     </div>
                     </a>
    
                     <a href='https://www.airbnb.co.uk/rooms/967329493186796393?adults=1&viralityEntryPoint=1&s=76&unique_share_id=C51AF008-BEAC-4D0C-9551-CE6FC9FA7C4F&_branch_match_id=1277319689636390144&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zKS9LLTdUPTHYMcPZxdCt2TwIAIHj%2BDxsAAAA%3D&source_impression_id=p3_1705774972_w%2FeapWyfPcN1nws3'>
                    <div className="quick-card-image-container">
                     <img src={imagesObject.img3} alt="" className="thirdimage" />
                     <div className="quick-desc">
                      <h3>{imagesObject.placename3}</h3>
                      <p>{imagesObject.price3}</p>
                     </div>
                     </div>
                     </a>
                  </div>
    
                 
                  <div className="second-card">
                     <a href='https://www.airbnb.co.uk/rooms/967329493186796393?adults=1&viralityEntryPoint=1&s=76&unique_share_id=C51AF008-BEAC-4D0C-9551-CE6FC9FA7C4F&_branch_match_id=1277319689636390144&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zKS9LLTdUPTHYMcPZxdCt2TwIAIHj%2BDxsAAAA%3D&source_impression_id=p3_1705774972_w%2FeapWyfPcN1nws3'>
                    <div className="quick-card-image-container">
                     <img key={index} src={imagesObject.img4} alt="" className="squareimage" />
                     <div className="quick-desc">
                      <h3>{imagesObject.placename4}</h3>
                      <p>{imagesObject.price4}</p>
                     </div>
                     </div>
                     </a>
                  </div>
                  
    
                  <div className="third-card flex">
                  <a href='https://www.airbnb.co.uk/rooms/967329493186796393?adults=1&viralityEntryPoint=1&s=76&unique_share_id=C51AF008-BEAC-4D0C-9551-CE6FC9FA7C4F&_branch_match_id=1277319689636390144&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zKS9LLTdUPTHYMcPZxdCt2TwIAIHj%2BDxsAAAA%3D&source_impression_id=p3_1705774972_w%2FeapWyfPcN1nws3https://www.airbnb.co.uk/rooms/967329493186796393?adults=1&viralityEntryPoint=1&s=76&unique_share_id=C51AF008-BEAC-4D0C-9551-CE6FC9FA7C4F&_branch_match_id=1277319689636390144&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zKS9LLTdUPTHYMcPZxdCt2TwIAIHj%2BDxsAAAA%3D&source_impression_id=p3_1705774972_w%2FeapWyfPcN1nws3'>
                    <div className="quick-card-image-container">
                     <img key={index} src={imagesObject.img5} alt="" className="rectimage" />
                     <div className="quick-desc">
                      <h3>{imagesObject.placename5}</h3>
                      <p>{imagesObject.price5}</p>
                     </div>
                     </div>
                     </a>
    
                     <a href='https://www.airbnb.co.uk/rooms/967329493186796393?adults=1&viralityEntryPoint=1&s=76&unique_share_id=C51AF008-BEAC-4D0C-9551-CE6FC9FA7C4F&_branch_match_id=1277319689636390144&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zKS9LLTdUPTHYMcPZxdCt2TwIAIHj%2BDxsAAAA%3D&source_impression_id=p3_1705774972_w%2FeapWyfPcN1nws3'>
                    <div className="quick-card-image-container">
                     <img key={index} src={imagesObject.img6} alt="" className="rectimage" />
                     <div className="quick-desc">
                      <h3>{imagesObject.placename6}</h3>
                      <p>{imagesObject.price6}</p>
                     </div>
                     </div>
                     </a>
                  </div>
                  </div>

                  )
                )
              }
{/* 
               <div className="first-card flex">
                <a href='..'>
                <div className="quick-card-image-container">
                 <img src={travel} alt="img" className="frstimage" />
                 <div className="quick-desc">
                  <h3>Maldives</h3>
                  <p>from 89,853</p>
                 </div>
                 </div>
                 </a>

                 <a href='..'>
                <div className="quick-card-image-container">
                 <img src={travel} alt="img" className="secondimage" />
                 <div className="quick-desc">
                  <h3>Maldives</h3>
                  <p>from 89,853</p>
                 </div>
                 </div>
                 </a>

                 <a href='..'>
                <div className="quick-card-image-container">
                 <img src={travel} alt="" className="thirdimage" />
                 <div className="quick-desc">
                  <h3>Maldives</h3>
                  <p>from 89,853</p>
                 </div>
                 </div>
                 </a>
              </div>

             
              <div className="second-card">
                 <a href='..'>
                <div className="quick-card-image-container">
                 <img src={square} alt="" className="squareimage" />
                 <div className="quick-desc">
                  <h3>Maldives</h3>
                  <p>from 89,853</p>
                 </div>
                 </div>
                 </a>
              </div>
              

              <div className="third-card flex">
              <a href='..'>
                <div className="quick-card-image-container">
                 <img src={travel} alt="" className="rectimage" />
                 <div className="quick-desc">
                  <h3>Maldives</h3>
                  <p>from 89,853</p>
                 </div>
                 </div>
                 </a>

                 <a href='..'>
                <div className="quick-card-image-container">
                 <img src={travel} alt="" className="rectimage" />
                 <div className="quick-desc">
                  <h3>Maldives</h3>
                  <p>from 89,853</p>
                 </div>
                 </div>
                 </a>
              </div>
                */}
            </div>
        </div>
            
    </div>
  )
}

export default Quick