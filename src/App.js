/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './container/header';

import loadable from '@loadable/component'

const Products = loadable(() => import('./components/products'))
const ProductDetails = loadable(() => import('./components/productDetails'))

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/view-product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
