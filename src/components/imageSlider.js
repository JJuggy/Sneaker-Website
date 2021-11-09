import React, {useState}from 'react'
import {SliderData} from './SliderData.js'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

function ImageSlider({slides}) {

    const [current, setCurrent]= useState(0)
    const length = slides.length;



    const nextSlide = ()=>{
        setCurrent( current === length - 1 ? 0 : current + 1)   

    }

    const previousSlide = ()=>{
        setCurrent( current === 0 ? length - 1 : current - 1    )   

    }
    console.log(current)
  

    
    
    return (
        <section className="slider">
           
            <FaArrowAltCircleLeft className="previousSlide  block lg:hidden"onClick={previousSlide}/>      
            <FaArrowAltCircleRight className="NextSlide  block lg:hidden" onClick={nextSlide}/>  
          
           
          {SliderData.map((slide, index)=>{

            return(

                <div className={index=== current ? 'slide active' : 'slide'} >

                    {index===current && (<img src={slide.image} alt="" className="w-full lg:w-4/5 lg:rounded-3xl"/>)}
                </div>
            )
            
          })} 
        </section>

    )
}

export default ImageSlider;
