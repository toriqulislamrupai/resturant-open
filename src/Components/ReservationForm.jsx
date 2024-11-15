const ReservationForm = () => (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Book Your Table</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Form Section */}
        <form className="max-w-md mx-auto md:max-w-lg w-full md:w-1/2 mb-8 md:mb-0">
          <input type="text" placeholder="Your Name" className="input input-bordered w-full mb-4" />
          <input type="email" placeholder="Your Email" className="input input-bordered w-full mb-4" />
          <input type="date" className="input input-bordered w-full mb-4" />
          <input type="number" placeholder="Total People" className="input input-bordered w-full mb-4" />
          <textarea placeholder="Message" className="textarea textarea-bordered w-full mb-4"></textarea>
          <button className="btn btn-primary w-full">Book Now</button>
        </form>
  
        {/* Image Section */}
        <div className="md:w-1/2 md:h-full w-full h-64">
          <img
            src="https://i.ibb.co.com/0f7BMBR/mike-kenneally-l-Ujg-Ej2-DS3-Q-unsplash.jpg"
            alt="Restaurant Interior"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
  
  export default ReservationForm;
  