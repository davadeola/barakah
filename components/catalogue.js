import React from 'react'
import Tile from './tile'


const Catalogue = (props) => (


      <div className="container-fluid d-flex h-100" id="catalogue">
        <div className="row">
          {props.data.map(product=><Tile key={product.name}
            image={"/static/images/"+product.image}
            name={product.name}
            bg={product.accent}
            Lgprice={product.Lgprice}
            Mdprice={product.Mdprice}
            vitamins={product.vitamins}
            minerals={product.minerals}
            fattyAcids={product.fattyAcids}
            starch={product.starch}
            raiseModal={props.raiseModal}
          />)}
        </div>
      </div>



)

export default Catalogue
