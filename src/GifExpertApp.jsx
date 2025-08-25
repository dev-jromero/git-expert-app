import { useState } from "react"
function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    
    const onAddCategory = () => {
        console.log('Bleach');
        setCategories([ 'Bleach', ...categories])
        
    }
    
    return (
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>

            {/* Input */}

            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map( category =>{
                    return <li key={ category }>{category}</li>
                })}
            </ol>
                {/* Gif Items */}
        </>
    )
}

export default GifExpertApp
