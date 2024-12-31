import React from 'react';

const ProductCard = ({ data }) => {
  if (!data) return null; // Handle missing data gracefully

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Product Image */}
      <img
        src={data.img}
        alt={data.title || 'Product Image'}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      
      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {data.title || 'Product Title'}
        </h3>
        {data.price && (
          <p className="text-green-500 font-bold mt-2">${data.price}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
