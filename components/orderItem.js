import React from 'react'




const OrderItem= (props) => (

    <div className="row order-item">
      <div className="col-md-6 text-center">
        <img src={props.orderImage} alt="" className="cart-img"/>
      </div>
      <div className="col-md-6">
        <p><span className="font-weight-bold">{props.orderName}</span></p>
        <p>Number: <span className="">{props.orderNo}</span></p>
        <p>Size: <span className="">{props.orderSize}</span></p>
      </div>
    </div>

)

export default OrderItem
