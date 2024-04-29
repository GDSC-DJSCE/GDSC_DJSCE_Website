import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightImg from '../../assets/events/rightDel.png';
import leftImg from '../../assets/events/leftDel.png';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", content: `url(${rightImg})`, borderRadius: "50%", width: "50px", height: "50px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", content: `url(${leftImg})`, borderRadius: "50%", width: "50px", height: "50px", zIndex: 1 }}
            onClick={onClick}
        />
    );
}

function VideoText() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1000);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            style={{
                flexDirection: isSmallScreen ? "column" : "row"
            }}
            className='flex justify-center items-center md:flex-col'
        >
            <video className='w-10/12 md:w-8/12' src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" width="60%" height="auto" controls autoPlay />
            <p className='inline-block h-auto md:text-lg sm:text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsum. Facere dolorum error dolorem ea dolores impedit sunt recusandae sint rem odit. Dolorem molestiae nihil officia animi repudiandae voluptate quos.
            </p>
        </div>
    );
}


const Imageslider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        initialSlide: 0,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='flex justify-center items-center ml-[0] mr-[0] my-[30px]'>
            <Slider {...settings} style={{ maxWidth: "90%", maxHeight: "90vh" }}>
                <div>
                    <VideoText />
                </div>
                <div>
                    <VideoText />
                </div>
                <div>
                    <VideoText />
                </div>
                <div>
                    <VideoText />
                </div>
                <div>
                    <VideoText />
                </div>
                <div>
                    <VideoText />
                </div>
            </Slider>
        </div>
    )
}

export default Imageslider;