import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'
import Landing from '../components/landing'
import Contact from '../components/contact'
import 'isomorphic-fetch'
import Catalogue from '../components/catalogue'



class Home extends React.Component{
  static async getInitialProps(){
    const res = await fetch('http://localhost:3000/static/data.json');
    const dummy = await res.json()
    return {dummy: dummy}
  }





  render(){

    return(
      <Layout>
        <Landing/>
        <Catalogue data={this.props.dummy}/>
        <Contact/>
      </Layout>
    )
  }
}

export default Home
