import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

import router from 'next/router'


class Login extends React.Component{


  handleSignIn=(e)=>{
    e.preventDefault();
    router.push("/dashboard");
  }

  render(){
    return(
      <Layout>

      <div className="container loading">
        <h1 className="text-center">Log into your account</h1>
        <form className="login-form" onSubmit={this.handleSignIn}>

          <div className="form-group row">
            <input name="password" type="password" placeholder="Enter your password" className="form-control"/>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
        <Link href='signup'>
          <a>
            <p className="text-center">New user? Click here to join the family</p>
          </a>
        </Link>
      </div>
    </Layout>)
  }

}

export default Login
