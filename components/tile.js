import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'
import Modal from '../components/modal'


const Tile = (props) => (

    <div className="col-md-4 prod-tile" style={{backgroundColor: props.bg}}>

        <div className="row">
          <img src={props.image} alt="" className="cat-img"/>
        </div>

        <div className="row">
            <p>{props.name}</p>
        </div>
          <div className="row">
            <button className="btn cat-btn" onClick={props.raiseModal}>View details</button>
          </div>
        
      </div>




)

export default Tile
