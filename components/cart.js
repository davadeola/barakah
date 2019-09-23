import React from 'react'
import OrderItem from './orderItem'



const Cart= (props) => (
  <div className="container cart" id="cart">
  <div className="row">
  <div className="col-md-12 text-right">
    <button className="btn" onClick={props.dropCart}>Close</button>
  </div>
  </div>
    <div className="row">
      <div className="col-md-12">
        <h1 className="display-5 font-weight-bold text-center">My cart</h1>
      </div>
    </div>

    {props.orders.map(order=><OrderItem
      key={order.orderName}
      orderName={order.orderName}
      orderImage={order.orderImage}
      orderSize={order.orderSize}
      orderNo={order.orderNo}
      />)}

  </div>
)

export default Cart
