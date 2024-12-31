import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';
import img1 from "../../assets/Product/p-1.jpg";
import img2 from "../../assets/Product/p-2.jpg";
import img3 from "../../assets/Product/p-3.jpg";
import img4 from "../../assets/Product/p-4.jpg";

// Products Data
const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Boat Headphone",
        price: "120", // Fixed property name
        aosDelay: "0",
    },
    {
        id: 2,
        img: img2,
        title: "Rocky Mountain",
        price: "420", // Fixed property name
        aosDelay: "200",
    },
    {
        id: 3,
        img: img3,
        title: "Gogglese",
        price: "320", // Fixed property name
        aosDelay: "400",
    },
    {
        id: 4,
        img: img4,
        title: "Printed",
        price: "220", // Fixed property name
        aosDelay: "600",
    },
];

const Products = () => {
    return (
        <div className="py-8">
            <div className="container px-4 md:px-8">
                {/* Header Section */}
                <Heading title="Our Products" subtitle="Explore Our Collection" />

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    {ProductsData.map((product) => (
                        <ProductCard
                            key={product.id}
                            data={product}
                            aosDelay={product.aosDelay} // Pass AOS delay if needed
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
