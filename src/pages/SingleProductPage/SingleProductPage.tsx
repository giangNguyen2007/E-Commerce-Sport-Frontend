import './SingleProduct.css'
import React, { useState, useEffect, useContext } from 'react'

import { useLocation } from 'react-router-dom'
import { adminRequest } from '../../axios'
import SelectAddCart from '../../components/SelectAndAddCart/SelectAddCartModule'
import { fetchSingleProduct } from '../../customHooks/cartAPI'
import { IProduct } from '../../Types'


const SingleProductPage = () => {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [product, setProduct] = useState<IProduct | null>(null);
    

    useEffect(() => {
        const getSingleProduct = async () => { 
            try {
                debugger;
                const product = await fetchSingleProduct(productId)
                console.log(product)
                setProduct(product)
          
            } catch (error) {
                console.log(error)    
            }
        }
        getSingleProduct(); 
    
    }, [productId])




  return (
        <div className="p-prod-single-wrapper">
            <div className="img-container">
                <img className='left-img'
                    src={product?.img} 
                />
            </div>

            <div className="info-container" >
                <div className='product-title'>{product?.title}</div>

                <p className='product-desc'>{product?.desc}</p>

                <div className='price'>€ {product?.price}</div>

                {product? <SelectAddCart product={product} /> : null}

            </div>
        </div>
  )
}

export default SingleProductPage