import React from 'react'
import Navbar from '../components/Navbar/NavbarComponent'

const DefaultLayoutHoc =
    (Component) => ({ ...props }) => {
        return (
            <div>
                <Navbar />
                <Component {...props} />
                {/* <div className='bg-gray-800 w-full h-full text-white'>
                   
                </div> */}
            </div>
        )
    }

export default DefaultLayoutHoc