
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateImageIndex } from './action';
import './slider.css';

const ImageSlider = () => {
    const currentIndex = useSelector((state) => state.currentIndex);
    const dispatch = useDispatch();
  
    const images = [
      'https://images.squarespace-cdn.com/content/v1/5435569fe4b0d289e7405178/1510777952893-3RM4I2YQ1J2QOU19KMAW/Map4.jpg?format=1500w',
      'https://thumbs.dreamstime.com/z/imaginary-meteorological-vector-weather-map-europe-129642834.jpg',
      'https://thumbs.dreamstime.com/z/weather-forecast-meteorological-map-australia-realistic-synoptic-aditable-generic-showing-isobars-fronts-142506578.jpg',
      'https://thumbs.dreamstime.com/z/map-showing-earth-temperature-flow-26142234.jpg',
      'https://thumbs.dreamstime.com/z/isobars-22082605.jpg',
      'https://www.thoughtco.com/thmb/Bp0CjoQwhdAOcYOpJZJkjfJ9uTE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tropical-storm-barry-hits-gulf-coast-1607145-5c12d4c446e0fb0001f47f6e.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMowPhJ0M4MuyagpAtyCKdF-EB3qGNH2mwRA&usqp=CAU',
    ];
  
    const handleNext = () => {
      const nextIndex = (currentIndex + 1) % images.length;
      dispatch(updateImageIndex(nextIndex));
    };
  
    const handlePrev = () => {
      const prevIndex = (currentIndex + images.length - 1) % images.length;
      dispatch(updateImageIndex(prevIndex));
    };
  
    return (
        <div className="image-slider">
        <img src={images[currentIndex]} alt="Slider" />
        <div className='conButtons'>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
      </div>
    );
  };
  
  export default ImageSlider;