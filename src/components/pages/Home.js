import React  from 'react'
import ImageSlider from '../imageSlider'
import { SliderData } from '../SliderData'
import '../../App.css'
import Contents from '../contents'


function Home() {
   
    
    return (
        <>
            <div className="main-container  lg:mt-24 flex  justify-center flex-col lg:flex-row">
                <div className="section-container max-w-7xl  flex  flex-col lg:flex-row lg:justify-center ">
                        <section className="image-section">
                            <ImageSlider slides={SliderData}/>
                            <div className="flex hidden lg:block">
                                <img className="sub-images" src="" alt="" />
                                <img className="sub-images" src="" alt="" />
                                <img className="sub-images" src="" alt="" />
                                <img className="sub-images" src="" alt="" />
                            </div>
                        </section>
                        <Contents/>
                        
                </div> 
            </div>
    </>
    )
}

export default Home
