import React from 'react'
import ProductCard from '../components/ProductCard'
import Page5 from '../components/Page5'
import Footer from '../components/Footer'

const RainBoots = () => {
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
]
  return (
    <>
    <div className='h-screen w-full'>
      <div className='w-full h-90 lg:h-full shrink-0 bg-cover bg-no-repeat flex flex-col items-center justify-center'
       style={{ backgroundImage:`url('https://www.thesusoutdoors.com/cdn/shop/files/Anyday_Rain_Collection.png?v=1686861061&width=1500')`}}>
        <div className='hidden max-w-7xl mx-auto md:flex flex-col gap-6 text-center justify-center items-center'>
        <h1 className='text-white md:text-4xl lg:text-6xl max-w-5xl xl:text-7xl tracking-wide font-medium'>Waterproof. City Essential. Unisex.</h1>
        <p className='text-white/80 text-3xl'>The Anyday Rain Boot</p>
        </div>
      </div>
       <div className='bg-white w-full h-auto'>
         <div className='md:hidden sm:block py-22 bg-gray-100 flex gap-4 flex-col justify-center items-center'>
       <h1 className='text-5xl text-center'>Waterproof. City Essential. Unisex.</h1>
        <p className='text-black text-lg text-center'>The Anyday Rain Boot</p>
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

export default RainBoots
