import React from 'react'

const Cast = (props) => {
  return (
    <div>
        <div className='flex flex-col items-center'>
           <div className='w-32 h-32'>
                <img src={`http://image.tmdb.org/t/p/original${props.image}`} alt='cast and crew' className='w-full h-full rounded-full '/>
           </div>
        </div>
    </div>
  )
}

export default Cast