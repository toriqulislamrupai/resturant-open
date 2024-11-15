import React from 'react';

const Testimonials = () => {
  return (
    <div className="carousel w-full bg-yellow-500"> {/* Set carousel background to yellow */}
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
          <div className="text-white text-lg bg-black bg-opacity-50 p-4 rounded-lg w-full md:w-1/2">
            <h3 className="font-bold text-xl">“You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.”</h3>
            <p className="mt-2">- Khalid Al Dawsry</p>
            <p className="mt-1">Jeddah, Saudi Arabia</p>
          </div>
          <div className="relative w-full md:w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              alt="Beautiful landscape view"
              className="w-full"
            />
            {/* Add video icon in the center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2a1 1 0 011 1v18a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h1zm17 0a1 1 0 011 1v18a1 1 0 01-1 1h-1a1 1 0 01-1-1V3a1 1 0 011-1h1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
          <div className="text-white text-lg bg-black bg-opacity-50 p-4 rounded-lg w-full md:w-1/2">
            <h3 className="font-bold text-xl">“This is the best biryani I’ve had in a long time. The flavors were so rich and the meat was tender. Definitely a place I’ll visit again.”</h3>
            <p className="mt-2">- Fatima Ibrahim</p>
            <p className="mt-1">Riyadh, Saudi Arabia</p>
          </div>
          <div className="relative w-full md:w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              alt="Scenic view of the countryside"
              className="w-full"
            />
            {/* Add video icon in the center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2a1 1 0 011 1v18a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h1zm17 0a1 1 0 011 1v18a1 1 0 01-1 1h-1a1 1 0 01-1-1V3a1 1 0 011-1h1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
          <div className="text-white text-lg bg-black bg-opacity-50 p-4 rounded-lg w-full md:w-1/2">
            <h3 className="font-bold text-xl">“A hidden gem! The falafel here was amazing. Crispy on the outside and soft inside. I’ll definitely be back to try more dishes.”</h3>
            <p className="mt-2">- Ahmed Al Zahrani</p>
            <p className="mt-1">Mecca, Saudi Arabia</p>
          </div>
          <div className="relative w-full md:w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              alt="Mountain range during sunset"
              className="w-full"
            />
            {/* Add video icon in the center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2a1 1 0 011 1v18a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h1zm17 0a1 1 0 011 1v18a1 1 0 01-1 1h-1a1 1 0 01-1-1V3a1 1 0 011-1h1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
          <div className="text-white text-lg bg-black bg-opacity-50 p-4 rounded-lg w-full md:w-1/2">
            <h3 className="font-bold text-xl">“Amazing service and delicious food. The lamb kebabs were to die for, and the fresh bread was just perfect.”</h3>
            <p className="mt-2">- Sara Al Jaber</p>
            <p className="mt-1">Dammam, Saudi Arabia</p>
          </div>
          <div className="relative w-full md:w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              alt="City skyline at night"
              className="w-full"
            />
            {/* Add video icon in the center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2a1 1 0 011 1v18a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h1zm17 0a1 1 0 011 1v18a1 1 0 01-1 1h-1a1 1 0 01-1-1V3a1 1 0 011-1h1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
