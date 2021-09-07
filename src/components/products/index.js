/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React from 'react';
import Product from '../product';
import ProductFilter from '../productFilter';
import { getAllProductsFromStorage, getDefaultProducts, getFilterProducts} from '../../service/products'

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount = async() => {
    if(localStorage.getItem('filterData')){
      let localStorageData = localStorage.getItem('filterData')
      let lte = JSON.parse(localStorageData).price_lte;
      let gte = JSON.parse(localStorageData).price_gte;

      let params =  {
        gender: JSON.parse(localStorageData).gender,
        color: JSON.parse(localStorageData).color,
        ...{price_lte: lte, price_gte: gte},
        ...{_sort: 'price', _order: 'asc'}
      }

      // get products from localstorage after page refresh
      let getStorageProducts = await getAllProductsFromStorage(params)
      this.setState({ products: getStorageProducts })
    }
    else{
      //get all products from api 
      let getAllProducts = await getDefaultProducts()
      this.setState({ products: getAllProducts })
    }
  }

  handleProductFilderData = async(gender, color, price) => {

    let filterGenderKey = !Object.values(gender).every(o => o === null)
    let filterColorKey = !Object.values(color).every(o => o === null)

    let params = {
      gender: filterGenderKey === false ? [] : Object.values(gender),
      color: filterColorKey === false ? [] : Object.values(color), 
      ...{price_lte: price.price ? price.price.max ? parseInt(price.price.max) : null: null, price_gte: price.price ? price.price.min? parseInt(price.price.min) : parseInt(price.price.max): null},
      ...{_sort: 'price', _order: 'asc'}
    }

    // filter products api call
    let getAllFilterProducts = await getFilterProducts(params)

    this.setState({ products: getAllFilterProducts })
    localStorage.setItem('filterData', JSON.stringify(params))
  }

  render() {
      return (
        <div className="container mt-5">
          <div className="nu__products d-flex">
            <div className="nu__product_filter_column mr-5">
              <h5>Filter</h5>
              <ProductFilter handleProductFilderData={this.handleProductFilderData.bind(this)}></ProductFilter>
            </div>
            <div className="ml-5">
              <h3>Products</h3>
              {this.state.products.length > 0 ?
                <div className="nu__product-column">
                    <Product products={this.state.products}></Product>
                </div>
                : <p className="mt-5">No any products for this data</p>
              }
            </div>
          </div>  
        </div>
      )
  }
}

export default Products;