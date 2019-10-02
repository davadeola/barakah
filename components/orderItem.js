import React from 'react'




const OrderItem= (props) => (

    <div className="row order-item">
      <div className="col-md-4 text-center">
        <img src={props.orderImage} alt="" className="cart-img"/>

      </div>
      <div className="col-md-6">
        <p><span className="font-weight-bold">{props.orderName}</span></p>
        <p>Number: <span className="">{props.orderNo}</span></p>
        <p>Size: <span className="">{props.orderSize}</span></p>
        <p> iD :{props.orderId}</p>

      </div>
        <div className="col-md-2">
          <button className="btn btn-danger" onClick={()=>{props.deleteCartItem(props.orderId)}}>Delete</button>
      </div>
    </div>

)

export default OrderItem
