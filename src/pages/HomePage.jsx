import React, { useState } from 'react'

//Layout HOC
import DefaultLayoutHoc from '../layout/DefaultLayout'

//Components
import EntertainmentCardComponent from '../components/Entertainment/EntertainmentCardComponent'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import PosterSlider from '../components/PosterSlider/PosterSliderComponent'


const HomePage = () => {
  const [recommmendedMovies, setRecommmendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvnts] = useState([])

  return (
    <>
      <HeroCarousel />

      <div className='conatiner mx-auto px-4 md:px-12 my-8'>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>
          The best of Entertainment
        </h1>
        <EntertainmentCardComponent />
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider
          title="Recommended Movies"
          subtitle="List Of Recommended Movies"
          posters={recommmendedMovies}
          isDark={false}
        />
      </div>
      <div className='bg-premier-800 py-12'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3' >
          <div className='hidden md:flex'>
            {/* <img src='https://th.bing.com/th?id=OIP.SOrqtMs1uYMm4lpxR5pdGQHaFO&w=297&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' className='' alt='rupay' /> */}
             <img src='' alt='rupay_pic' />
        </div>
        <PosterSlider
          title="Premiers"
          subtitle="Brand new releases every Friday"
          posters={premierMovies}
          isDark={true}
        />
        </div>
        </div>
        <div className='container mx-auto px-4 md:px-12 my-8'>
          <PosterSlider
            title="Online Streaming Events"
            subtitle="Online Stream Events"
            posters={onlineStreamEvents}
            isDark={false}
          />
       
      </div>
    </>
  )
}

export default DefaultLayoutHoc(HomePage)