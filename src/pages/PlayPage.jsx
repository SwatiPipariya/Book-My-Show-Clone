import React from 'react'
import DefaultLayoutHoc from '../layout/DefaultLayout'

//components
import PosterComponent from '../components/Poster/PosterComponent'
import PlayFiltersComponent from '../components/PlayFilters/PlayFiltersComponent'


const PlayPage = () => {
  return (
    <>
      <div className='container mx-auto px-4 my-10'>
        <div className='w-full flex flex-col-reverse lg:flex-row-reverse gap-4'>
          <h2 className='text-2xl font-bold mb-4'>Plays in Hospet</h2>
          <div className='fkex flex-wrap'>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <PosterComponent isPlay={true} src="" title="So Rude of Me By Sweets" 
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <PosterComponent isPlay={true} src="" title="So Rude of Me By Sweets" 
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <PosterComponent isPlay={true} src="" title="So Rude of Me By Sweets" 
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <PosterComponent isPlay={true} src="" title="So Rude of Me By Sweets" 
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <PosterComponent isPlay={true} src="" title="So Rude of Me By Sweets" 
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
              <PosterComponent isPlay={true} src="" title="So Rude of Me By Sweets" 
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
          </div>
        </div>
        
        <div className='lg:w1/4 p-4 bg-white rounded'>
          <h2 className='text-2xl font-bold mb-4'>Filters</h2>
          <div>
            <PlayFiltersComponent title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
          </div>
          <div>
            <PlayFiltersComponent title="Date" tags={["English", "Hindi", "Telugu"]} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultLayoutHoc(PlayPage)