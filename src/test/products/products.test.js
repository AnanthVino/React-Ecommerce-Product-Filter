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
 import Products from '../../components/products';
 
 configure({ adapter: new Adapter() })
 
 describe('render steps', () => {
     it('should render correctly', () => {
         let wrapper = shallow(<Products />).childAt(0)
         expect(toJson(wrapper)).toMatchSnapshot()
     })
 })