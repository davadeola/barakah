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



class Home extends React.Component{
  static async getInitialProps(){
    const res = await fetch('http://localhost:3000/static/data.json');
    const dummy = await res.json()
    return {dummy: dummy}
  }

state={
  showModal: false,
  image:'',
  name:"",
  image:"",
  Lgprice:'',
  Mdprice:'',
  accent:"",
  vitamins:"",
  minerals:"",
  fattyAcids:"",
  starch:""
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

  });

}

dropModal=()=>{
  this.setState({showModal: false});
}




  render(){

    return(
      <Layout>
        <Landing/>
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
          Mdprice={this.state.Mdprice}/>
      }
        <Catalogue data={this.props.dummy} raiseModal={this.raiseModal} />
        <Contact/>
      </Layout>
    )
  }
}

export default Home
