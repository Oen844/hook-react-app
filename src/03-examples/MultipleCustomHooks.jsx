
import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {
  const {increment, counter}= useCounter(1);
  
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { data, isloading, hasError } = useFetch(url)

  const { author, quote } = !!data && data[0];

  

  if (isloading) {

  }

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        isloading ? (
          <div className='alert alert-info text-center'>
            Loading...
          </div>
        )
          : (
            <blockquote className='blockquote text-end'>
              <p className='mb-1'>{quote}</p>
              <footer className='blockquote-footer mt-3'> {author}</footer>
            </blockquote>
            
          )
      }
      

      <button 
      onClick={() => increment()} 
      className='btn btn-primary'
      disabled = {isloading}>
      next
      </button>

    </>
  )
}
