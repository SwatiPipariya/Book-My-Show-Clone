import React from 'react'
import Slider from "react-slick"
import PosterComponent from "../Poster/PosterComponent"

const PosterSlider = (props) => {
  const {posters, title, subtitle, isDark} = props  
  const settings = {
     infinite: true,
     speed: 500,
     slidesToShow: 5,
     slidesToScroll: 4,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
     ]
  }

  return (
   <>
    <div className='flex flex-col items-start sm:ml-3 my-2'>
      <h3 className={`text-2xl font-bold ${ isDark === true ? 'text-white' : 'text-black'}`}>
        {title}
      </h3>
      <p className={`text-sm  ${ isDark === true ? 'text-white' : 'text-gray-800'}`}>{subtitle}</p>
    </div>
    <Slider {...settings}>
      {posters.map((each, index)=><PosterComponent {...each} isDark={isDark} key={index}/>)}
    </Slider>
   </>
  )
}

export default PosterSlider