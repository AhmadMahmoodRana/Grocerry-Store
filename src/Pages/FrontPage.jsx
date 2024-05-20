import React, { useState } from 'react'
import Header from '../Components/Header'
import FeatureLabel from '../Components/FeatureLabel'
import CategorySlider from '../Components/CategorySlider'
import MostRatedProduct from '../Components/MostRatedProduct'
import LatestProducts from '../Components/LatestProducts'
import Poster from '../Components/Poster'
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'

const FrontPage = ({open, setOpen}) => {

  


  return (
    <>
    <Header open={open} setOpen={setOpen} />
    <FeatureLabel/>
  <CategorySlider/>
  <MostRatedProduct/>
  <LatestProducts/>
  <Poster/>
  <Blog/>
  <Footer/>
  
  
    </>
  )
}

export default FrontPage
