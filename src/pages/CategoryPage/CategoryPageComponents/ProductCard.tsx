import './ProductCard.css'
import React from 'react'
import { Link } from 'react-router-dom'
// import SelectAddCart from '../../../components/SelectAndAddCart/SelectAddCartModule'
import { IProduct } from '../../../Types'
import SelectAddCart from '../../../components/SelectAndAddCart/SelectAddCartModule'

type ProductCardProps = {
    product : IProduct
    key: string
}


const ProductCard = ( {product, key} : ProductCardProps) => {

  return (
    <div className="product-card">
       
            <img 
                className='product-img'
                src={product.img} />
            
            <Link className='title' to={`/product/${product._id}`}>
                <div className="product-title">
                    {product.title}
                </div>
            </Link>

            <div className="info-product">
                <div className="upper-wrapper">
                    <div className="price">
                        € {product.price}
                    </div>
                </div>

                <SelectAddCart product={product} />
            </div>    
      
    </div>
    )
}

export default ProductCard