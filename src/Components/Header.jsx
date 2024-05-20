import React from 'react'
import "../Stylings/FrontPage.css"
const Header = () => {
  return (
    <div className='main'>
    <header class="text-gray-600 body-font mx-2">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font lg:text-[3rem] md:text-[2rem] sm:[1.5rem] text-[1.5rem] lg mb-4 font-bold text-[#39245f] lg:leading-[3.4rem] md:leading-[2.8rem] leading-[1.7rem]">Shopping with us for 
       <br class="hidden lg:inline-block"/>
       better quality and the
       <br class="hidden lg:inline-block"/>
        best price

      </h1>
      <p class="mb-8 leading-relaxed text-[17px] font-semibold">  We have prepared special discounts for you on grocery products. Don't <br /> miss these opportunities...</p>
      <div class="flex justify-center">
      <button class="slide-button">Shop Now</button>
      <button class="slide-button ml-4">Download App</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="./src/assets/hero.png"/>
    </div>
  </div>
</header>
</div>
  )
}

export default Header
