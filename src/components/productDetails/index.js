/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React, { useEffect, useState } from "react";
import { getProductDetails } from '../../service/products';
import './productDetails.css';

const ProductDetails = (props) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let params =  {
                id: props.location.state.id,
            }
            let productDtails = await getProductDetails(params)
            setProduct(productDtails)
        }
        fetchData();
    })

    return (
        <div className="container py-2">
            <div className="row">
                <div className="col-10 col-md-4 my-3">
                    <img src={product.imageURL} className="w-100 h-100" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 text-capitalize">
                    <h2>{product.name}</h2>
                    <p className="text-title text-capitalize text-muted mt-3 mb-2">
                        gender: <span className="text-capitalize">{product.gender}</span>
                    </p>
                    <p className="text-title text-capitalize text-muted mt-2 mb-2">
                        color: <span className="text-capitalize">{product.color}</span>
                    </p>
                    <h5 className="text-danger">
                        <strong>
                            price: <span>$ {product.price}</span>
                        </strong>
                    </h5>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        product information:
                    </p>
                    <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails
