import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


const GifExpertApp = () => {
    
    const [ categories, setCategories] = useState([ 'One Punch '])
    console.log(categories)

    const onAddCategory = (newCategory)=> {
      if( categories.includes( newCategory )) return; 
        // Dos formas de hacerlo: 
        setCategories([...categories, newCategory])
    //     setCategories(cat => [...cat, 'valorant'])
    }


  return (
    <>
    
    <h1>GifExpertApp</h1>
    
    <AddCategory 
    // setCategories={setCategories}
    onNewCategory={(value)=>onAddCategory(value)}
      
    />
 
        { 
        categories.map(category => 
            
              <GifGrid key={category} 
              category={category}/>
            )}
  
       {/* gif item */}
    </>
  )
}

export default GifExpertApp
