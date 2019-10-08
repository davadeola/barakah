import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'
import Landing from '../components/landing'
import Contact from '../components/contact'
import 'isomorphic-fetch'
import Modal from '../components/modal'
import Catalogue from '../components/catalogue'
import Cart from '../components/cart'
import uuid from  'uuid'
import Checkout from '../components/checkout'



class Home extends React.Component{
  static async getInitialProps(){
    const res = await fetch('http://localhost:3000/static/data.json');
    const dummy = await res.json()
    return {dummy: dummy}
  }

state={
  showModal: false,
  showCheckout: false,
  image:'',
  name:"",
  image:"",
  Lgprice:'',
  Mdprice:'',
  accent:"",
  vitamins:"",
  minerals:"",
  fattyAcids:"",
  starch:"",
  orders:[],
  showCart:false,
  totalPrice:0
}

raiseModal=(e)=>{
  e.preventDefault();
  this.setState({
    showModal: true,
    image:e.target.elements.image.value,
    name:e.target.elements.name.value,
    Lgprice:e.target.elements.Lgprice.value,
    Mdprice:e.target.elements.Mdprice.value,
    accent:e.target.elements.bg.value,
    vitamins:e.target.elements.vitamins.value,
    minerals:e.target.elements.minerals.value,
    fattyAcids:e.target.elements.fattyAcids.value,
    starch:e.target.elements.starch.value

  },()=>{
    console.log(this.state.orders);
  });

}


calculateTPrice=()=>{
    let price=0;
  this.state.orders.forEach(order=>{
    if (order.orderSize=="medium") {
      price+=parseInt(order.orderNo)*parseInt(order.Mdprice);
    } else {
      price+=parseInt(order.orderNo)*parseInt(order.Lgprice);
    }

  })

  this.setState({totalPrice: price},()=>{
    console.log(this.state.totalPrice);
  });
}

dropModal=()=>{
  this.setState({showModal: false});
}



handleOrder=(e)=>{
  e.preventDefault();
  var order={
    orderNo:e.target.elements.noOfJars.value,
    orderSize: e.target.elements.size.value,
    orderImage: e.target.elements.orderImage.value,
    orderName:e.target.elements.orderName.value,
    Lgprice:e.target.elements.Lgprice.value,
    Mdprice:e.target.elements.Mdprice.value,
    orderId: uuid.v4()
  }


  this.setState({
    orders: [...this.state.orders, order]
  },()=>{
    alert("Added your item")

  })
}


showCart=()=>{
  this.dropModal();
  this.setState({showCart:true});

}

showCheckout=()=>{
  this.setState({showCheckout:true});
    this.calculateTPrice()
}

dropCheckout=()=>{
  this.setState({showCheckout: false});
}

dropCart=()=>{
  this.setState({showCart: false});
}

deleteCartItem=(orderId)=>{
  const orders = this.state.orders.filter(order=> order.orderId !== orderId);
  this.setState({orders: orders}, ()=>{
    console.log(this.state.orders);
  });

}

  render(){

    return(
      <Layout>
        <Nav   showCart={this.showCart} />
        <Landing/>
        {this.state.showCart && <Cart orders={this.state.orders} dropCart={this.dropCart} showCheckout={this.showCheckout} deleteCartItem={this.deleteCartItem}/>}
        {this.state.showModal && <Modal
          dropModal={this.dropModal}
          image={this.state.image}
          accent={this.state.accent}
          vitamins={this.state.vitamins}
          minerals={this.state.minerals}
          fattyAcids={this.state.fattyAcids}
          starch={this.state.starch}
          name={this.state.name}
          Lgprice={this.state.Lgprice}
          Mdprice={this.state.Mdprice}
          handleOrder={this.handleOrder}
          showCart={this.showCart}/>
      }
        <Catalogue data={this.props.dummy} raiseModal={this.raiseModal} />
        <Contact/>

      {this.state.showCheckout && <Checkout totalPrice={this.state.totalPrice}/>}

      </Layout>
    )
  }
}

export default Home
