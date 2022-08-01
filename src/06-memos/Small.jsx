import { memo }from 'react'

export const Small = memo(({value}) => {

    console.log("Me volví a redibujar")
  return (
    <small> { value } </small>
  )
})
