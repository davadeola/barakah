import React from 'react'
import OrderItem from './orderItem'



const Cart= (props) => (
  <div className="modal-container">
  <div className="modal-box">
  <div className="container-fluid" id="cart">
  <div className="row">
  <div className="col-md-12 text-right">
    <button className="btn" onClick={props.dropCart}><img src="/static/images/del.png" className="icons"/></button>
  </div>
  </div>
    <div className="row">
      <div className="col-md-12">
        <h1 className="display-5 font-weight-bold text-center">My cart</h1>
      </div>
    </div>

    <div className="cart-content">

    {props.orders.map(order=><OrderItem
      key={order.orderId}
      orderName={order.orderName}
      orderImage={order.orderImage}
      orderSize={order.orderSize}
      orderNo={order.orderNo}
      orderId={order.orderId}
      deleteCartItem={props.deleteCartItem}
      />)}
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <button className="btn btn-success" onClick={props.showCheckout}>Next to payment</button>
      </div>
    </div>
  </div>
</div>
</div>
)

export default Cart
