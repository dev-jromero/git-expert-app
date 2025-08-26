import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; 

        //console.log(newCategory);
        setCategories([ newCategory , ...categories])
        
    }
    
    return (
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>

        
                <AddCategory 
            
                onNewCategory={(event) => onAddCategory(event)}

                />
            
                {
                    categories.map(( category ) => (
                        <GifGrid  
                            key={category} 
                            category={category}
                        />
                    ))
                }
                
                
        </>
    )
}

export default GifExpertApp
