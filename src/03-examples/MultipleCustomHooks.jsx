
import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

  const { data, isloading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1')

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
              <footer className='blockquote-footer'> {author}</footer>
            </blockquote>
          )
      }



    </>
  )
}
