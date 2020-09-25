import React from 'react'
import { BrowserRouter , Switch ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import SpecialProducts from './pages/SpecialProducts'
import CheckOut from './pages/CheckOut'
import ShoppingCart from './pages/ShoppingCart'
import MemberCentre from './pages/MemberCentre'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/products" component={Products} />
            <Route path="/productdetail" component={ProductDetail} />
            <Route path="/specialproducts" component={SpecialProducts} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/shoppingcart" component={ShoppingCart} />
            <Route path="/membercentre" component={MemberCentre} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>


)


export default Router