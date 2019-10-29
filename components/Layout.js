import React from 'react'
import Link from 'next/link'
import Head from 'next/head'



const Layout = (props) => (<div>
  <Head>
    <title>Home</title>
    <link rel="stylesheet" href="/static/bootstrap.min.css" key="test"/>
    <link rel="stylesheet" href="/static/main.css" key="css1"/>
    <link rel="stylesheet" href="/static/react-toastify.css" key="css2"/>
  </Head>

  {props.children}
</div>
)

export default Layout
