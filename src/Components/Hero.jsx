const Hero = () => (
    <section className="hero min-h-screen flex flex-col md:flex-row items-center justify-center bg-red-500">
      {/* Left: Text Content */}
      <div className="flex-1 text-center md:text-left p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Taste the Authentic Saudi Cuisine
        </h1>
        <p className="mt-4 text-gray-200">
          Among the best Saudi chefs in the world, serving you something beyond flavor.
        </p>
        <button className="mt-6 px-6 py-2 bg-yellow-500 text-gray-800 rounded-md hover:bg-yellow-600 focus:outline-none">
          Explore Menu
        </button>
      </div>
  
      {/* Right: Image */}
      <div className="flex-1 p-8 flex justify-center items-center">
        <img
          src="https://i.ibb.co/RYhz0vF/sample.jpg"
          alt="Saudi Cuisine"
          className="w-full h-auto max-w-[300px] md:max-w-[400px] md:h-[600px] rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
  
  export default Hero;
  