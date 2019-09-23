import React from 'react'



const Modal = (props) => (
  <div className="modal-container">
  <div className="modal-box">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-right">
          <button className="btn" onClick={props.dropModal}>Close</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="row">
              <img src={props.image} alt="" className="modal-img"/>
          </div>
        </div>
        <div className="col-md-8">
          <div>
            <h1 className="display-5 font-weight-bold">Nutritional Value</h1>
            <p>Vitamins: <span style={{color:props.accent}}>{props.vitamins}</span></p>
            <p>Minerals: <span style={{color:props.accent}}>{props.minerals}</span></p>
            <p>Fatty Acids: <span style={{color:props.accent}}>{props.fattyAcids}</span></p>
            <p>Starch: <span style={{color:props.accent}}>{props.starch}</span></p>
          </div>

          <div>
            <h1 className="display-5 font-weight-bold">Price</h1>
            <p>Large: <span style={{color:props.accent}}> Kshs.{props.Lgprice}</span></p>
            <p>Medium: <span style={{color:props.accent}}> Kshs.{props.Mdprice}</span></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-right">
          <button className="btn btn-success">ADD TO CART</button>
        </div>
          <div className="col-md-6  text-left">
              <button className="btn btn-info">VIEW MY CART</button>
          </div>

      </div>

    </div>
  </div>
  </div>
)

export default Modal
