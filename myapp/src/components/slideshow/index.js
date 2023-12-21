import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useState, useEffect } from 'react';
import './index.css'
const MyComponent= ()=> {
    const [slides,setSlides]=useState([])
    useEffect(()=>{
         const fetchSlides=async()=>{
            const jwtToken=localStorage.getItem('jwtToken')
            const options={
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${jwtToken}`
                }
            }
            const response=await fetch('https://apis.ccbp.in/restaurants-list/offers',options)
            const data=await response.json()
            
            setSlides(data.offers)
        }
        fetchSlides()
    },[])

    console.log(slides)
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          autoplay:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow:<button></button>
        };
    
    // const myConfig = {
    //     "data": slides, 
    //     "infinite": true, 
    //     "tofro" : false, 
    //     "autoplay": true, 
    //     "idleTime" : 3000, // 3 seconds
    //     "showCaption": true,
    //     "showSlideNum" : true,
    //     "showDots": true,
    //     "showArrows": 'both'
    // };
    // return <MyComponent config = {myConfig}/>;
    return  (
        <Slider {...settings}>
        {slides.map(each=>
            <div key={each.id}>
                <img src={each.image_url} alt='slide' className='slide'/>
            </div>)
        }
        </Slider>
      );
}

export default MyComponent