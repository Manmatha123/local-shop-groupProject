import React from 'react'
import Prlist from './Prlist'

 function Products() {
  return (
    <div className='product'>
        <h5>Products</h5>
        <div className="product-list bg-primary">
            <div className="p-name">Product Name</div>
            <div className="p-catagory">Catagory</div>
            <div className="p-price">Price (Rs.)</div>
            <div className="p-stock">Stock</div>
            <div className="p-sold">Sold</div>
            <div className="p-revenew">Revenew (Rs.)</div>
            <div className="p-Action">Action</div>
        </div>
        <Prlist/>
        <Prlist/>
        <Prlist/>
        <Prlist/>
    </div>
  )
}




export {Products}