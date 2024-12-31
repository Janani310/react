import React from "react";

const shopProducts = [
  { id: 1, name: "Laptop", image: "https://via.placeholder.com/150?text=Laptop" },
  { id: 2, name: "Wireless Headset", image: "https://via.placeholder.com/150?text=Wireless+Headset" },
  { id: 3, name: "Smart Watch", image: "https://via.placeholder.com/150?text=Smart+Watch" },
];

const Shop = ({ addToCart }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Shop Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shopProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <h2 className="mt-4 font-bold">{product.name}</h2>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-primary text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
