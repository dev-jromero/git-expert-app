import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";


function GifGrid({ category }) {
    
    const [counter, setcounter] = useState(10);
    useEffect( ()=> {
        getGifts(category);

        
    }, [])

    

    return (
        <>
            <h3>{ category }</h3>    
            <h5>{ counter }</h5>
            <button onClick={()=> setcounter(counter + 1)}>+1</button>
        </>
    )
}

export default GifGrid
