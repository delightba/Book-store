import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import BookCard from '../component/BookCard';

function BestSellingBook() {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5001/all-books')
        .then(res=>res.json())
       // .then(data=>console.log(data))
        .then(data=>setBooks(data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <BookCard books={books} headline='Best selling books'/>
    </div>
  )
}

export default BestSellingBook;