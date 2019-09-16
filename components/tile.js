import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'

const Tile = (props) => (
  <Layout>
    <div className="col-md-4">
      <div>
          <img src="static/images/jar.png" alt=""/>
      </div>

    </div>

  </Layout>
)

export default Tile
