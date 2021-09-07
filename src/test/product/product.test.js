/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

 import React from 'react';
 import { configure, shallow } from 'enzyme';
 import Adapter from 'enzyme-adapter-react-16';
 import toJson from 'enzyme-to-json';
 import Product from '../../components/product';
 
 configure({ adapter: new Adapter() })

 let products = [
    {
      "id": 1,
      "imageURL": "http://placehold.it/150/1b21a0/ffffff",
      "name": "product A",
      "type": "",
      "price": 250,
      "currency": "$",
      "color": "Black",
      "gender": "men"
    },
    {
      "id": 2,
      "imageURL": "http://placehold.it/150/bc4125/ffffff",
      "name": "product B",
      "type": "",
      "price": 350,
      "currency": "$",
      "color": "Blue",
      "gender": "women"
    },
    {
      "id": 3,
      "imageURL": "http://placehold.it/150/5abc25/ffffff",
      "name": "product C",
      "type": "",
      "price": 150,
      "currency": "$",
      "color": "Pink",
      "gender": "men"
    },
 ]
 
 describe('render steps', () => {
     it('should render correctly', () => {
         let wrapper = shallow(<Product products={products}/>).childAt(0)
         expect(toJson(wrapper)).toMatchSnapshot()
     })
 })