import React from 'react'
import Tile from './tile'


const Catalogue = (props) => (


      <div className="container-fluid d-flex h-100" id="catalogue">
        <div className="row">
          {props.data.map(product=><Tile key={product.name} image={"/static/images/"+product.image} name={product.name} bg={product.accent} raiseModal={props.raiseModal} />)}
        </div>
      </div>



)

export default Catalogue
