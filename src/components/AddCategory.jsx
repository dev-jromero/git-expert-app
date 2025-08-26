import { useState } from "react"

function AddCategory({onNewCategory}) {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChanged = ({target}) =>{
        setInputValue( target.value )
        
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        setInputValue(''); 
        
        onNewCategory(inputValue.trim())
        //setCategories((categories)=> [inputValue, ...categories]);  
        
    }

    return (
        
        <form onSubmit={ onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifts"
                value={inputValue}
                onChange={ onInputChanged }
            />
        </form>
    )
}

export default AddCategory
