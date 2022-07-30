import { useEffect } from "react";



export const Message = () => {

    useEffect(() => {
        
        console.log('Msg Mounted');
        
        return () => {
          console.log('Msg unMounted');
        
      }
    }, [])
    


    return (

        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
