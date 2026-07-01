import React from 'react'
import ProductCard from '../components/ProductCard';
import Page5 from '../components/Page5';
import Footer from '../components/Footer';

const WeekendBoots = () => {
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
    id: 3,
    title: "The Weekend Boot In Sage",
    image: "https://www.thesusoutdoors.com/cdn/shop/files/sustainable-hiking-boot-green_d9bf3eed-d916-4805-a085-d74bc0ab2e1d.png?v=1686600050&width=493",
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
    id: 3,
    title: "The Weekend Boot In Sage",
    image: "https://www.thesusoutdoors.com/cdn/shop/files/sustainable-hiking-boot-green_d9bf3eed-d916-4805-a085-d74bc0ab2e1d.png?v=1686600050&width=493",
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
    id: 3,
    title: "The Weekend Boot In Sage",
    image: "https://www.thesusoutdoors.com/cdn/shop/files/sustainable-hiking-boot-green_d9bf3eed-d916-4805-a085-d74bc0ab2e1d.png?v=1686600050&width=493",
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
    id: 3,
    title: "The Weekend Boot In Sage",
    image: "https://www.thesusoutdoors.com/cdn/shop/files/sustainable-hiking-boot-green_d9bf3eed-d916-4805-a085-d74bc0ab2e1d.png?v=1686600050&width=493",
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
    id: 3,
    title: "The Weekend Boot In Sage",
    image: "https://www.thesusoutdoors.com/cdn/shop/files/sustainable-hiking-boot-green_d9bf3eed-d916-4805-a085-d74bc0ab2e1d.png?v=1686600050&width=493",
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
    id: 3,
    title: "The Weekend Boot In Sage",
    image: "https://www.thesusoutdoors.com/cdn/shop/files/sustainable-hiking-boot-green_d9bf3eed-d916-4805-a085-d74bc0ab2e1d.png?v=1686600050&width=493",
    rating: 5,
    reviewCount: 122,
    price: "Rs.80,800.00 PKR"
  },
];
  return (
    <>
    <div className='h-screen w-full'>
      <div className='w-full h-90 lg:h-full shrink-0 bg-cover bg-no-repeat flex flex-col items-center justify-center'
       style={{ backgroundImage:`url('https://www.thesusoutdoors.com/cdn/shop/files/all-season-sustainable-boots.png?v=1694182081&width=1500')`}}>
        <div className='hidden max-w-7xl mx-auto md:flex flex-col gap-6 text-center justify-center items-center'>
        <h1 className='text-white md:text-4xl lg:text-6xl xl:text-7xl tracking-wide font-medium'>Versatile. Sustainable. Oh So Comfy!</h1>
        <p className='text-white/80 text-3xl'>The Weekend Boot</p>
        </div>
      </div>
       <div className='bg-white w-full h-auto'>
         <div className='md:hidden sm:block py-22 bg-gray-100 flex gap-4 flex-col justify-center items-center'>
       <h1 className='text-5xl text-center'>Comfy All Day. Cosy All year.</h1>
        <p className='text-black text-lg text-center'>Sustainable Outdoor Footwear Made with 99% Natural and Recycled Materials.</p>
        </div>
      </div>
    </div>
    <div className='3xl:max-w-7xl 3xl:mx-auto p-4 py-22'>
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
    <Page5/>
    <Footer/>
    </>
  )
}

export default WeekendBoots
