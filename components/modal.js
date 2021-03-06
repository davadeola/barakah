import React from 'react'



const Modal = (props) => (
  <div className="modal-container">
  <div className="modal-box">
    <div className="container-fluid  h-100">
      <div className="row align-items-center">
        <div className="col-md-12 text-right">
          <button className="btn" onClick={props.dropModal}><img src="/static/images/del.png" className="icons"/></button>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4">
          <div className="row">
              <img src={props.image} alt="" className="modal-img"/>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h1 className="display-5">Nutritional Value</h1>
            <p>Vitamins: <span style={{color:props.accent}}>{props.vitamins}</span></p>
            <p>Minerals: <span style={{color:props.accent}}>{props.minerals}</span></p>
            <p>Fatty Acids: <span style={{color:props.accent}}>{props.fattyAcids}</span></p>
            <p>Starch: <span style={{color:props.accent}}>{props.starch}</span></p>
          </div>


        </div>
          <div className="">
            <div>
              <h1 className="display-5 ">Price</h1>
              <p>Large: <span style={{color:props.accent}}> Kshs.{props.Lgprice}</span></p>
              <p>Medium: <span style={{color:props.accent}}> Kshs.{props.Mdprice}</span></p>
            </div>
          </div>

      </div>
      <div className="row align-items-center">
          <div className="col-md-12  text-center">
              <button className="btn btn-info" onClick={props.showPlaceOrder}>Place Order</button>
          </div>

      </div>

    </div>
  </div>
  </div>
)

export default Modal
