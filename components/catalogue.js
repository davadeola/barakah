import React from 'react'
import Tile from './tile'


const Catalogue = (props) => (


      <div className="container d-flex h-100" id="catalogue">
        <div className="row">
          <Tile image={props.image} name={props.name} dest={props.dest}/>
        </div>
      </div>



)

export default Catalogue
