
import React from 'react'

import {useFetch, useCounter} from "../hooks"
import LoadingQuote from '../03-examples/LoadingQuote';
import Quote from '../03-examples/Quote';



export const Layout = () => {
  const {increment, counter, reset}= useCounter(1);
  
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

  const { data, isloading, hasError } = useFetch(url)

  const { author, quote } = !!data && data[0];



  if (isloading) {

  }

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

     
      {isloading ? (<LoadingQuote />) : (<Quote quote = {quote} author= {author}/>)}
      
      <button 
      onClick={() => increment()} 
      className='btn btn-primary'
      disabled = {isloading}>
      next
      </button>

      <button 
      onClick={() => reset()} 
      className='btn btn-secondary'
      disabled = {isloading}>
      Reset
      </button>

    </>
  )
}
