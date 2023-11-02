import React, { useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import data from '../data/data';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';

export default function Page() {
  const [rotation, setRotation] = useState(0);
  const [shifted, setShifted] = useState(false);
  const [autoRotating, setAutoRotating] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [imageRotation, setImageRotation] = useState(0);
  const rotateValue = rotation * (50 / data.length);

  const handleNext = () => {
    if (!shifted) {
      setShifted(true);
      setRotation((rotation + 1) % data.length);
    }
  };

  const handlePrev = () => {
    if (!shifted) {
      setShifted(true);
      setRotation((currentRotation - 1 + data.length) % data.length);
      setCurrentRotation((currentRotation - 1 + data.length) % data.length);
    }
  };

  useEffect(() => {
    if (shifted) {
      const animationTimeout = setTimeout(() => {
        setShifted(false);
      }, 500);
      return () => clearTimeout(animationTimeout);
    }
  }, [shifted]);

  
    const autoRotate = () => {
      if (!shifted) {
        setAutoRotating(true);
        setTimeout(() => {
          setAutoRotating(false);
          setRotation((rotation + 1) % data.length);
          setShifted(false);
        }, 5000); 
      };
    };

    useEffect(() => {
      if (!autoRotating) {
        autoRotate();
      }
    
      setImageRotation(-rotateValue); 
    }, [rotation, autoRotating, rotateValue]);
    

  return (
    <main>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-40 md:mt-48 mb-10">
        <section
          className=
          {`space-y-3 ${shifted ? 'scale-10' : ''} mt-20 lg:mt-0`}
          style={{ transform: `scale(${shifted ? 1.1 : 1})`, transition: 'transform 0.5s' }}
        >
          <div className="space-y-2">
            <h3 className="font-medium text-5xl text-[#FF922C] p-1">{data[rotation].price}</h3>
            <h5 className="font-medium text-5xl w-72 p-1">{data[rotation].name}</h5>
          </div>
          <p className="text-sm w-96 mr-1 p-2">{data[rotation].description}</p>
          <Button
            className="shadow-sm rounded-full text-sm font-bold px-6 py-3"
            style={{background: "#FF922C", color: "white", marginBottom: "20px", boxShadow: "7px 7px 9px rgba(255, 5, 128, 0.2)" }}
          >
            BELI SEKARANG
          </Button>
        </section>
        <section className="flex flex-row items-end justify-between z-10 mx-auto">
  <Button
    onClick={handlePrev}
    className="shadow-sm rounded-full text-sm font-bold p-3"
    style={{ backgroundColor: "#FF922C", color: "white", marginLeft: "100px" }}
  >
    <BsArrowLeft style={{height:25, width:25}}/>
  </Button>
  <Image
    src={data[rotation].food_image}
    className='md:w-72 md:h-72 lg:w-80 w-60 h-60 lg:h-80 animate-scale'
    alt={data[rotation].name}
    width={100}
    height={100}
    style={{
      marginTop: "50px",
      transform: `rotate(${imageRotation}deg)`,
      transition: 'transform 0.5s',
      width: `${shifted ? 540 : 540}px`,
      height: `${shifted ? 350 : 350}px`,
      marginLeft: "100px"
    }}
  />
  <Button
    onClick={handleNext}
    className="shadow-sm shadow-[#FF922C] rounded-full text-sm font-bold p-3"
    style={{ backgroundColor: "#FF922C", color: "white", marginLeft: "90px" }}
  >
    <BsArrowRight style={{height:25, width:25}}/>
  </Button>
</section>

      </div>
      <section
        className="absolute overflow-hidden rounded-bl-full rounded-br-full mx-auto right-0 top-0 h-[20rem] w-full lg:mr-auto md:h-[32rem] lg:h-[44rem] lg:w-[95rem]"
        style={{
          position: "absolute",
          overflow: "hidden",
          backgroundColor: "#FFEEDE",
          right: "-223px",
          top: "-200px",
        }}
      >
        <Image
          className="w-full md:w-10/12 mx-auto ml-15 transform rotate-0"
          src={data[rotation].cirles}
          alt={data[rotation].name}
          style={{ marginTop: '300px', width: '60%',
            transform: `rotate(${rotateValue}deg)`,
            transition: 'transform 0.5s'
          }}
          priority
        />
      </section>
    </main>
  );
}
