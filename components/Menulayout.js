import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from './nav'




const MenuLayout = (props) => (

  <div className="menu-layout">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">

        </div>
      </div>
      <div className="row ">

        <div className="text-center col-md-12">


              <div className="card menu-card">View Summary</div>

              <div className="card menu-card">Add Product</div>

              <div className="card menu-card">Edit Product</div>

          

          </div>

      </div>

    </div>
  </div>
)

export default MenuLayout
