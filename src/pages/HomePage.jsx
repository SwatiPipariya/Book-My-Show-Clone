import React, { useEffect, useState } from 'react'
import axios from 'axios'

//Layout HOC
import DefaultLayoutHoc from '../layout/DefaultLayout'

//Components
import EntertainmentCardComponent from '../components/Entertainment/EntertainmentCardComponent'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import PosterSlider from '../components/PosterSlider/PosterSliderComponent'


const HomePage = () => {
  const [recommmendedMovies, setRecommmendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([])

  // get.apiName('/', async () => {})

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get(
        // "https://api.themoviedb.org/3/movie/popular?api_key=79f5da683028d4d8f06dfcaf2073231a"
        "/movie/popular"
      );
      setRecommmendedMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        "/movie/top_rated"
      );
      setPremierMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get(
        "/movie/upcoming"
      );
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);


  return (
    <>
      <HeroCarousel />

      <div className='container mx-auto px-4 md:px-12 my-8 '>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>
          The best of Entertainment
        </h1>
        <EntertainmentCardComponent />
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8 '>
        <PosterSlider
          title="Recommended Movies"
          subtitle="List Of Recommended Movies"
          posters={recommmendedMovies}
          isDark={false}
        />
      </div>
      <div className='bg-premier-800 py-12'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3' >
          {/* <div className='hidden md:flex'> */}
            {/* <img src='https://th.bing.com/th?id=OIP.SOrqtMs1uYMm4lpxR5pdGQHaFO&w=297&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' className='' alt='rupay' /> */}
            {/* <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fred-play-icon&psig=AOvVaw33NkVloZZamBoStIDzeNtW&ust=1702802491474000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjm_ODHk4MDFQAAAAAdAAAAABAD' alt='rupay_pic' className='w-full h-full' /> */}
          {/* </div> */}
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