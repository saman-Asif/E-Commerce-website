import React from 'react'
import ProductCard from "./ProductCard";
const ProductGrid = () => {
    const products = [
  {
    id: 1,
    title: "The Allegra",
    image: "https://www.thesusoutdoors.com/cdn/shop/files/sustainable-walking-boot-white_f9c6786f-4923-42be-a052-e4841603545d.png?v=1686558765&width=823", 
    rating: 5,
    reviewCount: 122,
    price: "Rs.80,800.00 PKR"
  },
  {
    id: 2,
    title: "The Weekend Boot In Black",
    image: "https://www.thesusoutdoors.com/cdn/shop/files/sustainable-hiking-boot-black.png?v=1686559314&width=493",
    rating: 5,
    reviewCount: 122,
    price: "Rs.80,800.00 PKR"
  },
  {
    id: 3,
    title: "The Weekend Boot In Sage",
    image: "https://www.thesusoutdoors.com/cdn/shop/files/sustainable-hiking-boot-green_d9bf3eed-d916-4805-a085-d74bc0ab2e1d.png?v=1686600050&width=493",
    rating: 5,
    reviewCount: 122,
    price: "Rs.80,800.00 PKR"
  },
  {
    id: 4,
    title: "The Weekend Boot Z In Black",
    image: "https://www.thesusoutdoors.com/cdn/shop/files/winter-boots-city-black.png?v=1686668626&width=493",
    rating: 5,
    reviewCount: 14,
    price: "Rs.80,800.00 PKR"
  }
];
  return (
    <div className='3xl:max-w-7xl 3xl:mx-auto p-4 pb-12'>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-gray-200 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} 
          title={product.title}
          image={product.image}
          rating={product.rating}
          reviewCount={product.reviewCount}
          price={product.price}
          >
          </ProductCard>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
