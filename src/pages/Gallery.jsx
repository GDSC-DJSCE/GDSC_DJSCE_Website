import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import rightImg from '../assets/events/rightDel.png';
import leftImg from '../assets/events/leftDel.png';
import Img1 from '../assets/gallery/Image1.jpeg';
import Img2 from '../assets/gallery/Image2.jpg';
import Img3 from "../assets/gallery/Image3.jpg";
import Img4 from "../assets/gallery/Image4.jpg";
import Img5 from "../assets/gallery/Image5.jpg";
import Img6 from "../assets/gallery/Image6.jpeg";
import Img7 from "../assets/gallery/Image7.jpeg";
import Img8 from "../assets/gallery/image8.jpeg";
import Img9 from "../assets/gallery/Image9.jpeg";
import CoreBack from "../assets/gallery/CoreBack.jpeg";
import WOC1 from "../assets/gallery/woc_winners.jpeg";
import WOC2 from "../assets/gallery/runners_up.jpeg";

import Vid1 from '../assets/gallery/Vid1.mov';
import Vid2 from '../assets/gallery/Vid2.mov';
import Samay from "../assets/gallery/Samay.mov";
import Quiz from "../assets/gallery/Quiz.mov";
import Day1 from "../assets/gallery/Day1.mov";
import Burgers from "../assets/gallery/Burgers.mov"



const mediaItems = [
  { type: 'image', source: Img3 },
  { type: 'image', source: CoreBack },
  { type: 'video', source: Samay },
  { type: 'image', source: Img5 },
  { type: 'video', source: Vid1 },
  { type: 'video', source: Vid2 },
  { type: 'image', source: Img6 },
  { type: 'image', source: Img7 },
  { type: 'image', source: Img8 },
  { type: 'video', source: Burgers },
  { type: 'image', source: Img4 },
  { type: 'image', source: WOC1 },
  { type: 'image', source: WOC2 },
  { type: 'video', source: Day1 },
  { type: 'image', source: Img9 },
  { type: 'image', source: Img1 },
  { type: 'image', source: Img2 },
  { type: 'video', source: Quiz },
];

const Gallery = () => {
  const [data, setData] = useState({ media: null, i: 0 });

  const viewMedia = (media, i) => {
    setData({ media, i });
  };

  const mediaAction = (action) => {
    let i = data.i;
    const totalMedia = mediaItems.length;

    if (action === 'next-media') {
      setData({ media: mediaItems[(i + 1) % totalMedia], i: (i + 1) % totalMedia });
    } else if (action === 'prev-media') {
      setData({ media: mediaItems[(i - 1 + totalMedia) % totalMedia], i: (i - 1 + totalMedia) % totalMedia });
    } else {
      setData({ media: null, i: 0 });
    }
  };

  return (
    <>
      {data.media && (
        <div className='w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-[0] flex justify-center items-center z-50'>
          <button className='absolute top-[10px] right-[20px] [rotate:45deg] rounded-[50%] text-[60px] h-auto p-[none] bg-none border-[none] text-[white] cursor-pointer' onClick={() => mediaAction('close')}>
            +
          </button>
          <button className='fixed top-2/4 bg-none border-[none] left-[10px] text-center cursor-pointer z-50' onClick={() => mediaAction('prev-media')}>
            <img src={leftImg} alt='Error' style={{ width: '50px', height: '50px' }} />
          </button>
          {data.media.type === 'image' ? (
            <img className='w-auto max-h-[90%] max-w-[90%]' src={data.media.source} alt='Error' />
          ) : (
            <video className='w-auto max-h-[90%] max-w-[90%]' controls>
              <source src={data.media.source} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          )}
          <button className='fixed top-2/4 bg-none border-[none] right-[10px] text-center cursor-pointer z-50' onClick={() => mediaAction('next-media')} style={{ width: '50px', height: '50px' }}>
            <img src={rightImg} alt='Error' />
          </button>
        </div>
      )}
      <div style={{ padding: '10px' }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter='10px'>
            {mediaItems.map((media, i) =>
              media.type === 'image' ? (
                <img key={i} src={media.source} style={{ width: '100%', display: 'block' }} alt='' onClick={() => viewMedia(media, i)} />
              ) : (
                <video key={i} src={media.source} style={{ width: '100%', display: 'block' }} alt='' onClick={() => viewMedia(media, i)} controls>
                  Your browser does not support the video tag.
                </video>
              )
            )}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Gallery;
