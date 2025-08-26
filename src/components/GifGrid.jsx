import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";
import GifItem from "./GifItem";


function GifGrid({ category }) {

    const [images, setImages] = useState([])
    
    //const [counter, setcounter] = useState(10);

    const getImages = async() => {
        const newImages = await getGifts(category);
        setImages(newImages);
    }
    useEffect( ()=> {
        
        getImages();
        
    }, [])

    

    return (
        <>
            <h3>{ category }</h3>    
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
