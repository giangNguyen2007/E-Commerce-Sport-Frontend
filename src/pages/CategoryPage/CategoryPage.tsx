import './CategoryPage.css'
import React, { useState } from 'react'
import ProductsList from './CategoryPageComponents/ProductsList'
import { useLocation } from 'react-router-dom'
import Selector from '../../components/Selector/Selector'
import { categoriesData } from '../../data'

const CategoryPage = () => {
    const location = useLocation();
    const title = location.pathname.split("/")[2];
    const [colorFilter, setColorFilter] = useState<string>("")
    const [sizeFilter, setSizeFilter] = useState<string>("")

    const category = categoriesData.find( item => item.title === title)
    
    const handleSizeSelect = (value : string) => { 
        if (value === 'all') {
            setSizeFilter("");
        } else {
            setSizeFilter(value);
        }
     }

    const handleColorSelect = (value: string) => { 
        if (value === 'all') {
            setColorFilter("");
        } else {
            setColorFilter(value);
        }
     }
  
  return (
    <div className='prod-category-wrapper'>
        <h1> Category : {title} </h1>
        <div className = 'filters-wrapper'>

            <div className = 'filters-left-wrapper'>

                <span >Filter by: </span>
                <Selector title="Color" dataArray={category?.colorArray} handleChange={handleColorSelect} />
                <Selector title="Size" dataArray={category?.sizeArray} handleChange={handleSizeSelect} />
                
            </div>
              
        </div>

        <ProductsList cat={category?.cat} colorFilter={colorFilter} sizeFilter={sizeFilter}/>
    </div>
  )
}

export default CategoryPage