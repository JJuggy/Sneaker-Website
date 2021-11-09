import React, {useState} from 'react'
import Button from './Button'

function Contents() {


    const [ numberOfShoes, setNumberOfShoes] = useState(0)

    const handleNumberOfShoesClick=()=>{
        setNumberOfShoes(()=>numberOfShoes +1)
    }

    const handleRemoveClick=()=>{
       setNumberOfShoes(numberOfShoes=== 0 ? numberOfShoes : numberOfShoes - 1)
    }

    return (

        <>
            <section className="info-section  w-full lg:w-10/12 p-4 lg:p-0 lg:pt-24 ">  
                        <h4 className="title text-sm lg:text-2xl tracking-wider">SNEAKER COMPANY.</h4>
                        <h2 className=' shoe-type py-5 font-bold text-3xl lg:text-5xl'>Fall Limited Edition <br/> Sneakers</h2>   
                        <p className="about-shoes leading-7 lg:text-2xl">
                            These low profile sneakers are your perfect casual wear companion. featuring
                            a durable rubber outer sole,they'll withstand anything
                            the weather  can offer them
                        </p> 
                        <div className="price-container-main flex items-center lg:items-start lg:flex-col my-5">
                            <div className="price-container w-36 flex justify-between items-center pt-5">
                                <div className="price font-black text-4xl">$125</div>
                                <h3 className="discount font-semibold text-xl">50%</h3>
                            </div>
                            <div className="discount-price pt-5 ml-auto lg:ml-0">
                               <div className="discount-value line-through">$250</div> 
                            </div>
                        </div>

                        <div className="add-item-remove-item-section lg:w-full flex flex-col lg:flex-row lg:items-center ">
                            <div className="sign-container flex justify-between lg:w-2/4">
                                <div className="the-plus-sign" onClick={handleNumberOfShoesClick}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <div>
                                    {numberOfShoes}
                                </div>
                                <div className="the-minus-sign" onClick={handleRemoveClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                    </svg>
                                </div>
                            </div>
                          
                            <Button/>
                        </div>
                        
             </section>
            
        </>
    )
}


export default Contents
