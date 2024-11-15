import React from 'react';

const MenuItems = () => {
  const items = [
    {
      name: 'Vegetable Burger',
      image: 'https://i.ibb.co.com/F3PBttG/deryn-macey-k-PLcc-IMt-S8-E-unsplash.jpg',
    },
    {
      name: 'Special Pizza',
      image: 'https://i.ibb.co.com/M8pcSrd/amin-ramezani-w-Rw1-Mug-Fis-Q-unsplash.jpg',
    },
    {
      name: 'French Fries',
      image: 'https://i.ibb.co.com/B6LfBbB/fernanda-martinez-H2-Rzl-Oijhl-Q-unsplash.jpg',
    },
    {
      name: 'Cuisine Chicken',
      image: 'https://i.ibb.co.com/1MB2TMJ/jezebel-rose-Pzpy-MFEz4xo-unsplash.jpg',
    },
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Food Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map(({ name, image }) => (
          <div key={name} className="card bg-base-100 shadow-md p-4 text-center">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-40 object-cover rounded-lg mb-4" 
            />
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuItems;
