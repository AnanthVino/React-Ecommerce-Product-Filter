/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React from 'react';
import { useHistory } from 'react-router-dom';
import './product.css'
const Product = (props) => {

    let history = useHistory();

    const handleProductPage = (product_ID) => {
        history.push({
            pathname: `/view-product/${product_ID}`,
            state: { id: product_ID }
        });
    }
    return (
        <>
            {props.products.map((product, i) => {
                return <div className="card nu__card pe-auto" key={`${product}${i}`} >
                    <div className="card-image nu__card-image" onClick={() => handleProductPage(product.id)}>
                        <div className="nu__product_image">
                            <img src={product.imageURL} alt=""></img>
                        </div>
                    </div>
                    <div className="card-content">
                        <p className="nu__name nu__product-name mb-0 text-capitalize font-weight-bold">{product.name}</p>

                        <p className="nu__product-price mb-0">
                            {`$${product.price}`}
                        </p>
                    </div>
                </div>
            })}
        </>
    )
}

export default Product;