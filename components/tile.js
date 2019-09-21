import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'

const Tile = (props) => (

    <div className="col-md-4">
      <div>
          <img src={props.image} alt=""/>
          <p>{props.name}</p>

          <div className="row">
            <button className="btn">View details</button>
          </div>
      </div>

    </div>


)

export default Tile
