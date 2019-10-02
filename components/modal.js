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
        <div className="col-md-3">
          <div className="row">
              <img src={props.image} alt="" className="modal-img"/>
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <h1 className="display-5">Nutritional Value</h1>
            <p>Vitamins: <span style={{color:props.accent}}>{props.vitamins}</span></p>
            <p>Minerals: <span style={{color:props.accent}}>{props.minerals}</span></p>
            <p>Fatty Acids: <span style={{color:props.accent}}>{props.fattyAcids}</span></p>
            <p>Starch: <span style={{color:props.accent}}>{props.starch}</span></p>
          </div>

          <div>
            <h1 className="display-5 ">Price</h1>
            <p>Large: <span style={{color:props.accent}}> Kshs.{props.Lgprice}</span></p>
            <p>Medium: <span style={{color:props.accent}}> Kshs.{props.Mdprice}</span></p>
          </div>
        </div>
        <div>
          <h1 className="display-5 ">Place an order</h1>
          <form onSubmit={props.handleOrder}>
              <div className="form-group">
                <input type="number" name="noOfJars" className="form-control" placeholder="Number of jars" min="0" required/>
              </div>

              <div className="form-group">
                <input type="text" name="orderImage" value={props.image} className="form-control" hidden readOnly/>
              </div>

              <div className="form-group">
                <input type="text" name="orderName" value={props.name} className="form-control"  hidden readOnly/>
              </div>


              <div className="form-group">
                <select name="size" className="form-control" required>
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
      <div className="row">
          <div className="col-md-12  text-center">
              <button className="btn btn-info" onClick={props.showCart}>VIEW MY CART</button>
          </div>

      </div>

    </div>
  </div>
  </div>
)

export default Modal
