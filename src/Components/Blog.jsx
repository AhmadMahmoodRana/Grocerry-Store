"use client";
import React from "react";
// import { Rating as ReactRating } from "@smastrom/react-rating";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@smastrom/react-rating/style.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Add the default theme CSS
import "../Stylings/CategorySlider.css"
const blogs = [
  {
    id: 1,
    category: "Fresh Fruits",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/blog_02-520x330.jpg",
    heading: "Experience the Essence of Traditional Cusine",
    para: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta in beatae nobis sapiente."
  },
  {
    id: 2,
    category: "Frozen Food",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/blog_07-520x330.jpg",
    heading: "Discover the secret of our House-made Pasta.",
    para: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta in beatae nobis sapiente."
},
  {
    id: 3,
    category: "Nutrition",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/blog_05-520x330.jpg",
    heading: "Dive into the Bold FLavour of our Grilled Meat",
    para: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta in beatae nobis sapiente." 
},
  {
    id: 4,
    category: "Meats",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/blog_06-520x330.jpg",
    heading: "Experience the Essence of Traditional Cusine",
    para: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta in beatae nobis sapiente."
},
  {
    id: 5,
    category: "Beverage",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/blog_09-520x330.jpg",
    heading: "Experience the Essence of Traditional Cusine",
    para: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta in beatae nobis sapiente."
  },
  {
    id: 6,
    category: "Drinks",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/blog_04-520x330.jpg",
    heading: "Experience the Essence of Traditional Cusine",
    para: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta in beatae nobis sapiente."  
},
  {
    id: 7,
    category: "Pets",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/blog_08-520x330.jpg",
    heading: "Experience the Essence of Traditional Cusine",
    para: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta in beatae nobis sapiente."  
},
  {
    id: 8,
    category: "Toys",
    imageSrc: "https://www.radiustheme.com/demo/wordpress/themes/zilly/wp-content/uploads/2023/11/blog_03-520x330.jpg",
    heading: "Experience the Essence of Traditional Cusine",
    para: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta in beatae nobis sapiente."  
}
  
];

const Blog = () => {
  const splideOption = {
    type: "loop",
    focus: 0,
    gap: "1rem",
    perPage: 3,
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
    <div className="flex flex-col pt-10">
     <h1 className="text-[#39245f] font-bold text-[30px] mx-6">BLOGS</h1> 
    <React.Fragment>
      <section
        className="splide mx-auto max-w-full px-5 pt-8"
        aria-label="Splide Basic HTML Example"
      >
        <Splide options={splideOption}>
          
          {blogs.map((blog) => (
            <SplideSlide key={blog.id} className="splide__slide">
          
       <div class="h-full  bg-gray-100 bg-opacity-75 px-4 w-[500px] pt-4 pb-24 rounded-lg overflow-hidden text-left relative">
         <img src={blog.imageSrc} alt=""/>
           <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 mt-2">{blog.category}</h2>
           <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-600 mb-3">{blog.heading}</h1>
           <p class="leading-relaxed mb-3 text-[17px] text-gray-500">{blog.para}</p>
           <a class="text-gray-600 inline-flex items-center">Learn More
             <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path d="M5 12h14"></path>
               <path d="M12 5l7 7-7 7"></path>
             </svg>
           </a>
           <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
             <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
               <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                 <circle cx="12" cy="12" r="3"></circle>
               </svg>1.2K
             </span>
             <span class="text-gray-400 inline-flex items-center leading-none text-sm">
               <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
               </svg>6
             </span>
           </div>
         </div>

            
            </SplideSlide>
          ))}
        </Splide>
      </section>
    </React.Fragment>
    </div>
  );
};

export default Blog;














// import React from 'react'

// const Blog = () => {
//   return (
//     <section class="text-gray-600 body-font">
//   
//       <div class="h-full bg-gray-100 bg-opacity-75 px-4 pt-4 pb-24 rounded-lg overflow-hidden text-center relative">
//         <img src="./src/assets/blog_07-520x330.jpg" alt=""/>
//           <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 mt-2">Frozen Food</h2>
//           <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1>
//           <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           <a class="text-indigo-500 inline-flex items-center">Learn More
//             <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//           <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
//             <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
//               <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                 <circle cx="12" cy="12" r="3"></circle>
//               </svg>1.2K
//             </span>
//             <span class="text-gray-400 inline-flex items-center leading-none text-sm">
//               <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//               </svg>6
//             </span>
//           </div>
//         </div>
//       </div>
//       <div class="p-4 lg:w-1/3">
//         <div class="h-full bg-gray-100 bg-opacity-75 px-4 pt-4 pb-24 rounded-lg overflow-hidden text-center relative">
//         <img src="./src/assets/blog_05-520x330.jpg" alt=""/>

//           <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 mt-2">Nutrition</h2>
//           <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
//           <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           <a class="text-indigo-500 inline-flex items-center">Learn More
//             <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//               <path d="M5 12h14"></path>
//               <path d="M12 5l7 7-7 7"></path>
//             </svg>
//           </a>
//           <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
//             <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
//               <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                 <circle cx="12" cy="12" r="3"></circle>
//               </svg>1.2K
//             </span>
//             <span class="text-gray-400 inline-flex items-center leading-none text-sm">
//               <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//               </svg>6
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//   )
// }

// export default Blog
