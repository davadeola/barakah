import React from 'react'




const OrderItem= (props) => (

    <div className="row order-item text-left">
      <div className="col-md-3 text-center">
        <img src={props.orderImage} alt="" className="cart-img"/>

      </div>
      <div className="col-md-9 cart-text">
        <p><span className="">{props.orderName}</span></p>
        <p>Qty: <span className="">{props.orderNo}</span></p>
        <p>Size: <span className="">{props.orderSize}</span></p>
        <button className="btn btn-danger" onClick={()=>{props.deleteCartItem(props.orderId)}}><img src="/static/images/trash.png" className="icons"/></button>

      </div>

    </div>

)

export default OrderItem
