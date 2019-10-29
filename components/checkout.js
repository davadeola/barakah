import React from 'react'

const Checkout =(props)=>(
  <div className="modal-container">
  <div className="modal-box">
  <div className="container-fluid ">

    <div className="row">
      <div className="col-md-12">
        <h1 className="display-5 text-center font-weight-bold">Checkout</h1>
      </div>
      <div className="col-md-12 text-right">
        <button className="btn" onClick={props.dropCheckout}><img src="/static/images/del.png" className="icons"/></button>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h1>Total Price</h1>
        <h1> Kshs. {props.totalPrice}</h1>
      </div>
      <div className="col-md-6">
      <form onSubmit={props.handlePurchase}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" className="form-control" id="fullName" placeholder="Full name" name='fullName'/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email" name='email'/>
          </div>

        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" name='address'/>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNum">Phone Number</label>
          <input type="text" className="form-control" id="phoneNum" placeholder="+2547123456789" name='phoneNum'/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="country">Country</label>
            <input type="text" className="form-control" id="country" name='country'/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="payOpt">Payment option</label>
            <select id="payOpt" className="form-control" name='payOpt'>
              <option defaultValue>On Delivery</option>
              <option>Mpesa</option>

            </select>
          </div>

          <div className="form-group col-md-6">

            <textarea defaultValue={props.orderStatement} hidden name='orderStatement'>

            </textarea>
          </div>

        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-success">PURCHASE</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
</div>

)

export default Checkout;
