import { useLayoutEffect, useRef, useState } from "react"




export default function Quote({ quote, author }) {

    const pRef = useRef();
    const [boxSizes, setboxSizes] = useState({width:0, height:0});

    useLayoutEffect(() => {
        const {width, height}=(pRef.current.getBoundingClientRect());
        setboxSizes({width, height})

    }, [quote])

    return (
        <>

        <blockquote className='blockquote text-end'
            style={{ display: 'flex' }}
        >
            <p ref={pRef} className='mb-1'>{quote}</p>
            <footer className='blockquote-footer mt-3'> {author}</footer>
        </blockquote>

        <code>{JSON.stringify(boxSizes)}</code>
        </>
    )
}
