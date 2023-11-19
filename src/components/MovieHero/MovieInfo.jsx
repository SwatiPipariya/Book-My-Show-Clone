import React, { useContext, useState } from 'react'
import { MovieContext } from '../../context/MovieContext';
import PaymentComponent from '../PaymentModel/PaymentComponent';

const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const { movie } = useContext(MovieContext);

    const genres = movie.genres?.map(({ name }) => name).join(", ");

    const rentMovie = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const buyMovie = () => {
        setIsOpen(true);
        setPrice(999);
    };

    return (
        <>
            <PaymentComponent setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className='flex flex-col gap-8 '>
                <h1 className='text-white text-4xl font-bold'>{movie.original_title}</h1>
                <div className='text-white text-5l font-semibold'>
                    <h4> 4.4k rating</h4>
                    <h4> English, Hindi,Kannada, Tamil, Telegu</h4>
                    <h4>{movie.runtime} min | {genres} </h4>
                </div>
                <div className='flex items-center gap-3  md:px-4 md:w-screen text-xl px-4'>
                    <button onClick={rentMovie} className='bg-red-500 p-3 text-white font-semibold rounded-lg ' >
                        Rent $150
                    </button>
                    <button onClick={buyMovie} className='bg-red-500 p-3 text-white font-semibold rounded-lg '>
                        Buy $999
                    </button>
                </div>
            </div>
        </>
    )
}

export default MovieInfo