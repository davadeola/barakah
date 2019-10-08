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
        <form onSubmit={props.raiseModal}>
          <input type="text" name="image" value={props.image}  hidden readOnly/>
          <input type="text" name="name" value={props.name}  hidden readOnly/>
          <input type="text" name="bg" value={props.bg}  hidden readOnly/>
          <input type="number" name="Lgprice" value={props.Lgprice} hidden readOnly/>
          <input type="number" name="Mdprice" value={props.Mdprice} hidden readOnly/>
          <input type="text" name="vitamins" value={props.vitamins} hidden readOnly/>
          <input type="text" name="minerals" value={props.minerals} hidden readOnly/>
          <input type="text" name="fattyAcids" value={props.fattyAcids} hidden readOnly/>
          <input type="text" name="starch" value={props.starch} hidden readOnly/>


          <div className="row">
            <button className="btn cat-btn" type='submit'>View details</button>
          </div>
        </form>


      </div>




)

export default Tile
