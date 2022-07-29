import { useState } from "react"

export default function CounterApp() {

    const [state, setCounter] = useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30, 
    });

    const {counter1,counter2, counter3} = state;

    if((counter1 % 10)== 0){
        setCounter({
            
            counter2: counter2+1,
            counter1 : counter1+1,
            counter3: counter3
        })
    }

  return (
    
    <>
        <h1>
            CounterApp: { counter1 }
            <hr/>
            CounterApp: { counter2 }
            <hr/>
            CounterApp: { counter3 }
        </h1>
        <hr/>
        
        <button onClick={() => setCounter ({
           ... state,
           counter1: counter1+1
        })} className= "btn">+1</button>
    </>
  )
}
