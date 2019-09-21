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
  showModal: false
}

raiseModal=()=>{
  this.setState({showModal: true});
}

dropModal=()=>{
  this.setState({showModal: false});
}




  render(){

    return(
      <Layout>
        <Landing/>
        {this.state.showModal && <Modal dropModal={this.dropModal}/>}
        <Catalogue data={this.props.dummy} raiseModal={this.raiseModal} />
        <Contact/>
      </Layout>
    )
  }
}

export default Home
