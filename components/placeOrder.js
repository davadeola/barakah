import React from 'react'

const PlaceOrder = (props) => (
  <div className="modal-container">
  <div className="modal-box">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-right">
          <button className="btn" onClick={props.dropModal}><img src="/static/images/del.png" className="icons"/></button>
        </div>

      </div>
      <div className="row ">
        <div className="col-md-12 ">
            <h1 className="display-5 text-center">Place an order</h1>
        </div>

      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <img src="/static/images/spoon.png" alt="" className="order-img"/>
          </div>
        </div>
        <div className="col-md-8">

          <form onSubmit={props.handleOrder} className="place-order">
            <div className="form-group">
              <input type="number" name="noOfJars" className="form-control" placeholder="Number of jars" min="0" required="required"/>
            </div>

            <div className="form-group">
              <input type="text" name="orderImage" value={props.image} className="form-control" hidden="hidden" readOnly="readOnly"/>
            </div>

            <div className="form-group">
              <input type="text" name="orderName" value={props.name} className="form-control" hidden="hidden" readOnly="readOnly"/>
            </div>

            <div className="form-group">
              <input type="number" name="Lgprice" value={props.Lgprice} className="form-control" hidden="hidden" readOnly="readOnly"/>
            </div>

            <div className="form-group">
              <input type="number" name="Mdprice" value={props.Mdprice} className="form-control" hidden="hidden" readOnly="readOnly"/>
            </div>

            <div className="form-group">
              <select name="size" className="form-control" required="required">
                <option value="">Please select a jar size</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            <div className="form-group text-center">
              <button className="btn btn-success" type="submit">ADD TO CART</button>
            </div>

          </form>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12  text-center">
        <button className="btn btn-info" onClick={props.showCart}>VIEW MY CART</button>
      </div>

    </div>
  </div>
  </div>

)

export default PlaceOrder
