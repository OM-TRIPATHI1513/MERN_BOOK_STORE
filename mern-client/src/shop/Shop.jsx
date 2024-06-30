import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import {
  Link
} from "react-router-dom";


const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  }, [])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books Are here</h2>
      <div className='grid my-12 gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
           {
            books.map(book=>

      <Card
      className='cursor-pointer'
    >
      <img src={book.imageUrl} alt='' className='h-80'/>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          {book.bookTitle}
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          The best book sellers across the world.
        </p>
      </p>
      <Link to="/shop"><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Buy Now</button></Link>
    </Card>


              )
           }
      </div>
    </div>
  )
}

export default Shop
