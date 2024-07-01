"use client";
import React from "react";
// import { Rating as ReactRating } from "@smastrom/react-rating";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@smastrom/react-rating/style.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Add the default theme CSS
import "../Stylings/CategorySlider.css"
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    category: "Vegetables",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/vegetable_1.svg",
  },
  {
    id: 2,
    category: "Fruits",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/fruits_2.svg",
  },
  {
    id: 3,
    category: "Fish",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/fish_2.svg",
  },
  {
    id: 4,
    category: "Meats",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/fresh_meats_2.svg",
  },
  {
    id: 5,
    category: "Beverage",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/beverage_2.svg",
  },
  {
    id: 6,
    category: "Drinks",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/fresh_milk_2.svg",
  },
  {
    id: 7,
    category: "Pets",
    imageSrc: "./src/assets/pets.png",
  },
  {
    id: 8,
    category: "Toys",
    imageSrc: "./src/assets/toys.png",
  }
  
];

const CategorySlider = () => {
  const splideOption = {
    type: "loop",
    focus: 0,
    gap: "1rem",
    perPage: 5,
    breakpoints: {
      640: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  };
  return (
    <div className="flex flex-col pt-10 px-4">
     <h1 className="text-[#1b5e20] font-bold text-[30px] mx-6">Shop By Categories</h1> 
    <React.Fragment>
      <section
        className="splide mx-auto max-w-full px-5 pt-8"
        aria-label="Splide Basic HTML Example"
      >
        <Splide options={splideOption}>
          {products.map((product) => (
            <SplideSlide key={product.id} className="splide__slide">
          <Link to={`/bycategory/${product.category}`}>
            <div className="img-div bg-[#f7f7f7] w-[250px] h-[240px] rounded-[100px] flex flex-col justify-center items-center">
                <img src={product.imageSrc} alt="" width={100} />
                <h1 className="mt-4 text-lg text-gray-600 font-semibold">{product.category}</h1>
            </div>
            </Link>
            </SplideSlide>
          ))}
        </Splide>
      </section>
    </React.Fragment>
    </div>
  );
};

export default CategorySlider;