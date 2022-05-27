import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import"../../../App.js"
import Navbar from '../Navbar.js';
import "./Slides.css"

const slideImages = [
  {
    url: '../../images/img-1.jpg',
    caption: 'Slide 1'
  },
  {
    url: '../../images/img-2.jpg',
    caption: 'Slide 2'
  },
  {
    url: '../../images/img-3.jpg',
    caption: 'Slide 3'
  },
  {
    url: '../../images/img-4.jpg',
    caption: 'Slide 3'
  },
  {
    url: '../../images/img-5.jpg',
    caption: 'Slide 3'
  },
  {
    url: '../../images/img-6.jpg',
    caption: 'Slide 3'
  },
  {
    url: '../../images/img-7.jpg',
    caption: 'Slide 3'
  },
  {
    url: '../../images/img-8.jpg',
    caption: 'Slide 3'
  },
  {
    url: '../../images/img-9.jpg',
    caption: 'Slide 3'
  },
  {
    url: '../../images/img-10.jpg',
    caption: 'Slide 3'
  },
  {
    url: '../../images/img-11.jpg',
    caption: 'Slide 3'
  },
];

const SlidesShow = () => {
    return (
      <div>
        <div>

        <Navbar/>
        </div>
        <h1>View Travel Destinations</h1>
        <div className="slide-container new-div-01">
  
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='new-div-01' style={{'backgroundImage': `url(${slideImage.url})`}} >
                {/* <span>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </div>
    )
}

export default SlidesShow