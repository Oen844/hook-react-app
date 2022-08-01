import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

const heavyStuff = (interationNumbers) => {
  for (let i = 0; i < interationNumbers; i++) {
    console.log('Ahi vamos...');

  }
  return `${interationNumbers} iteraciones realizadas`;
}


export const MemorizeHook = () => {

  const { counter, increment } = useCounter(100);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (

    <>
      <h1>Counter:  <Small value={counter} /> </h1>
      <h4>{memorizedValue}</h4>


      <button
        className="btn btn-primary"
        onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outlinee-primary"
        onClick={() => { setShow(!show) }}>
        Show/Hiden {JSON.stringify(show)}
      </button>
    </>
  )
}
