
import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const { data, isloading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/1')


    
  return (
   <>
    <h1>Breaking Bad Quotes</h1>
    <hr/>
   </>
  )
}
