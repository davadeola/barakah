import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'
import Landing from '../components/landing'
import Contact from '../components/contact'

const Home = () => (
  <Layout>
    <Landing/>
    <Contact/>
  </Layout>
)

export default Home
