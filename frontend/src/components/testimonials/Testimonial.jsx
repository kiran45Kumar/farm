import React from 'react'
import arrow_left from '../../assets/arrow-left.png'
import arrow_right from '../../assets/arrow-right.png'
const Testimonial = () => {
  return (
    <>
     <div className='testimonial m-20'>
        <div className='flex justify-between'>
                <div>Words from people</div>
                <div className='flex items-center justify-center'>
                    <div><img src={arrow_left} alt="arrow_left" className='h-2 w-2' /> </div>
                    <div><img src={arrow_right} alt="arrow_right" className='h-2 w-2' /> </div>
                </div>
        </div>
    </div> 
    </>
  )
}

export default Testimonial
