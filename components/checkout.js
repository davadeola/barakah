import React from 'react'

const Checkout =(props)=>(
  <div className="container">
    <div className="row">
      <div className="col-md-6"></div>
      <div className="col-md-6">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="fullName">Full Name</label>
            <input type="text" className="form-control" id="fullName" placeholder="Full name" name='fullName'/>
          </div>
          <div className="form-group col-md-6">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email" name='email'/>
          </div>

        </div>
        <div className="form-group">
          <label for="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" name='address'/>
        </div>
        <div className="form-group">
          <label for="phoneNum">Phone Number</label>
          <input type="text" className="form-control" id="phoneNum" placeholder="+2547123456789" name='phoneNum'/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity"/>
          </div>
          <div className="form-group col-md-6">
            <label for="payOpt">Payment option</label>
            <select id="payOpt" className="form-control" name='payOpt'>
              <option selected>Mpesa</option>
              <option>Paypal</option>
                <option>MasterCard</option>
                  <option>Visa</option>
            </select>
          </div>

        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-success">PURCHASE</button>
        </div>
      </form>
    </div>
  </div>
</div>

)

export default Checkout;
