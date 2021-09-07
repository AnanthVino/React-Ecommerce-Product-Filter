/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
*/

import React from 'react';
import { getAllFacet } from '../../service/facet'
import './productFilter.css';
class ProductFilter extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            product_gender: [],
            product_price: [],
            product_color: [],
            isFilter: false,
            gender: {},
            color: {},
            price: {}
        };
    }
    
    componentDidMount = async () => {
        let getAllProductFacet = await getAllFacet()
        getAllProductFacet.map((facet) => {
            if(facet.name === 'Gender'){
                 return this.setState({ product_gender: facet.values})
            }else if(facet.name === 'Color') {
                 return this.setState({ product_color: facet.values})
            }else{
                 let filterPrice = facet.values.counts.filter((element, index) =>  {
                     return (index % 2 === 0);
                 });

                 let filterCount = facet.values.counts.filter((element, index) =>  {
                     return (index % 2 === 1);
                 });

                 //handle price products

                 let productPriceKeys = ['price1', 'price2', 'price3']
                 let productListKeys = ['list1', 'list2', 'list3']
             
                 let productPrice = Object.assign(...productPriceKeys.map((k, i) => ({ [k]: filterPrice[i] })));
                 let productList = Object.assign(...productListKeys.map((k, i) => ({ [k]: filterCount[i] })));
                 
                 return this.setState({product_price:  [{min: productPrice.price1, max: parseInt(productPrice.price2), value: productList.list1 }, {min: productPrice.price2, max: productPrice.price3, value: productList.list2}, { min: productPrice.price3, value: productList.list3}]})
            }
        })

        // handle local storage data for gender products

        var filterGenderData = {};
        let genderData = JSON.parse(localStorage.getItem('filterData')) !== null ? JSON.parse(localStorage.getItem('filterData')).gender : []

        for (var i = 0; i < genderData.length; i++){
            filterGenderData[genderData[i]] = genderData[i];
            this.setState({gender: filterGenderData})
        }

        // handle local storage data for color products

        var filterColorData = {};
        let colorData = JSON.parse(localStorage.getItem('filterData')) !== null ? JSON.parse(localStorage.getItem('filterData')).color : []

        for (var j = 0; j < colorData.length; j++){
            filterColorData[colorData[j]] = colorData[j];
            this.setState({color: filterColorData})
        }
      }

      handleProductChange = (e) => {
        let genderFilter = this.state.gender;
        let colorFilter = this.state.color;
        let priceFilter = this.state.price;
        if(e.target.category === 'gender'){
            genderFilter[e.target.gender] =  e.target.name
        }
        else if(e.target.category === 'color'){
            colorFilter[e.target.color] = e.target.name
        }
        else{
            priceFilter[e.target.category] = e.target.price
        }
        this.setState({gender: genderFilter, color: colorFilter, price: priceFilter})
        this.props.handleProductFilderData(this.state.gender, this.state.color, this.state.price)
      }

    render() {
        return (
            <div id="nu__product_filter">

                {/* handle gender products data */}

                <div className="nu__product-filter-menu">
                    <div className="nu__product-menu-title p-2">Gender</div>
                    <form className="mt-2 p-3">
                        {this.state.product_gender.map((gender, i) => {
                            return <label className="d-block" key={i}>
                            <input name={`${gender}`} type="checkbox" className="mr-1" defaultValue={gender} defaultChecked={JSON.parse(localStorage.getItem('filterData')) !== null ? JSON.parse(localStorage.getItem('filterData')).gender.includes(gender) : this.state.isFilter} 
                                onChange={(e) =>{this.handleProductChange({
                                target: {
                                    name: e.target.checked ? e.target.name : null,
                                    gender: gender,
                                    category: 'gender'
                                }
                            })}} />
                                {gender} 
                            </label>
                        })}
                    </form>
                </div>

                 {/* handle price products data */}

                <div className="nu__product-filter-menu">
                    <div className="nu__product-menu-title p-2">Price</div>
                    <form className="mt-2 p-3">
                        {this.state.product_price.map((price, i) => {
                            return <label className="d-block" key={i}>
                            <input name={`${price}`} type="checkbox" className="mr-1" defaultValue={price} defaultChecked={JSON.parse(localStorage.getItem('filterData')) !== null ? (JSON.parse(localStorage.getItem('filterData')).price_lte === parseInt(price.max) || JSON.parse(localStorage.getItem('filterData')).price_gte === parseInt(price.min)) : this.state.isFilter}
                                onChange={(e) =>{this.handleProductChange({
                                    target: {
                                        name: e.target.checked ? JSON.stringify(e.target.name) : null,
                                        price: e.target.checked ? price : null,
                                        category: 'price',
                                    }
                                })}}
                                />
                                {price.max ? `$${price.min}.00 - $${price.max-1}.00 (${price.value})` : `$${price.min}.00+ (${price.value})`}
                            </label>
                        })}
                    </form>
                </div>

                 {/* handle color products data */}

                <div className="nu__product-filter-menu">
                    <div className="nu__product-menu-title p-2">Color</div>
                    <form className="mt-2 p-3">
                        {this.state.product_color.map((color, i) => {
                            return <label className="d-block" key={i}>
                            <input name={`${color}`} type="checkbox" className="mr-1" defaultValue={color} defaultChecked={JSON.parse(localStorage.getItem('filterData')) !== null ? JSON.parse(localStorage.getItem('filterData')).color.includes(color) : this.state.isFilter} 
                                onChange={(e) =>{this.handleProductChange({
                                    target: {
                                        name: e.target.checked ? e.target.name : null,
                                        color: color,
                                        category: 'color',
                                    }
                                })}}
                                />
                                {color}
                            </label>
                        })}
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductFilter;