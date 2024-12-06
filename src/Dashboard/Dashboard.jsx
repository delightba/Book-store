import React, { useEffect, useState } from 'react';
import bookgirl from "../assets/bookimages/bookgirl.jpg";
import { FaStar } from 'react-icons/fa6';

export default function Dashboard() {
  const [books, setBook] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/all-books')
      .then(res => res.json())
      .then(data => setBook(data.slice(0, 8)))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='bg-teal-50 min-h-screen'>
      <div className='grid grid-cols-12 gap-8 m-10'>
        <div className='col-span-6'>
          <h1 className='font-bold text-violet-900 text-3xl mb-3'>Welcome to Bookstore Dashboard</h1>
          <p className='font-semibold'>Manage your books, authors, and orders here</p>
        </div>
        <div className='col-span-4'>
          <form className="max-w-md mx-auto">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>
        </div>
      </div>

      <div className='grid grid-cols-12 gap-8 m-10 bg-white p-10 shadow-lg rounded-lg'>
  <div className='col-span-6 flex flex-col justify-center'>
    <h2 className='text-3xl font-bold text-gray-800 mb-4'>
      Upload Your Book to Boost Sales
    </h2>
    <p className='text-gray-600 mb-6'>
      Engage your shop with this dashboard and generate daily sales from your books.
    </p>
    <button className='bg-blue-700 hover:bg-blue-600 text-white mt-4 px-6 py-3 rounded-full transition-all duration-300 ease-in-out'>
      + Add New Book
    </button>
  </div>
  <div className='col-span-6 flex justify-center'>
    <img 
      src={bookgirl} 
      alt="Book Cover" 
      className='h-64 w-3/4 object-cover object-top rounded-md shadow-md'
    />
  </div>
</div>


      <h1 className='text-3xl font-bold pb-5 text-center'>Popular Books 🔥</h1>

      <div className='grid grid-cols-12 gap-8 m-10'>
        {books.map(book => (
          <div key={book._id} className='col-span-3 bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition duration-300'>
          <div className='w-full h-96 overflow-hidden rounded-2xl'>
            <img src={book.imageUrl} alt={book.bookTitle} className='w-full h-full object-cover rounded-2xl' />
          </div>
          <div className='p-4'>
            <h3 className='text-xl font-semibold'>{book.bookTitle}</h3>
            <p className='text-gray-600 text-sm mb-2'>{book.authorName}</p>
            <div className='flex items-center text-amber-500 mb-4'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
}
