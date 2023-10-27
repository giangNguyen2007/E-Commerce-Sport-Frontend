import React, { useEffect, useState } from 'react'
import './ProductsList.css';
import ProductCard from './ProductCard'
import axios from 'axios'
import { adminRequest } from '../../../axios'
import { IProduct } from '../../../Types';

type ProductListProps = {
    cat : string | undefined
    colorFilter: string
    sizeFilter: string
}

const ProductsList = ({cat, colorFilter, sizeFilter} : ProductListProps) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);


    useEffect(() => {
        const getProducts = async () => { 
            try {
                const res = await adminRequest.get<IProduct[]>(`product?category=${cat}`)
                console.log(res.data)
                setProducts(res.data)
            } catch (error) {
                console.log(error)    
            }
        }

        getProducts(); 
    
    }, [cat])

    useEffect(() => {

        let filtered = products;

        if ( products.length > 0){
            
            if (colorFilter) {
                filtered = filtered.filter(
                    (product) => product.color.includes(colorFilter) 
                )
            } else if (sizeFilter) {
                filtered = filtered.filter(
                    (product) => product.size.includes(sizeFilter)
                )
            } 
        }

        setFilteredProducts(filtered) ; 
     
    }, [products, colorFilter, sizeFilter])

    console.log(filteredProducts);
    
  return (
    <div className="products-container">
        {filteredProducts.map(
            product => (<ProductCard product={product} key={product._id} />)
        )}
    </div>
    )
}

export default ProductsList