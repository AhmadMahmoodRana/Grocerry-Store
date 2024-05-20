import React from "react";

const Loader = () => {
  return (
    <div class="flex items-center justify-center  bg-white">
      <div class="flex flex-col">
        <div class="flex">
          <div class="relative">
            <div
              class="w-12 h-12 rounded-full absolute
                            border-4 border-solid border-gray-200"
            ></div>

            <div
              class="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-solid border-[#39245f] border-t-transparent shadow-md"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
