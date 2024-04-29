import React from 'react'
import Gallery from './Gallery'
import Imageslider from '../components/gallery/Imageslider';


const GalleryPage = () => {
  return (
    <div className='main-cont flex p-2.5 text-center justify-center align-center flex-col'>
      <h1 style={{ fontSize: "40px" }}>Highlights</h1>
      <Imageslider />
      <Gallery />
    </div>
  )
}

export default GalleryPage