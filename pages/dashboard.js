import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from '../components/Layout'
import MenuLayout from '../components/Menulayout'
import router from 'next/router'


class Dashboard extends React.Component{
  state={
    display:""
  }

  render(){
    const displayView=()=>{
      if (this.state.display=='startTrip') {

      } else if (this.state.display=='viewBus') {

      } else {
        return(
          <div>
            <h1>Welcome to your Dashboard.</h1>
            <h4>Select an option to begin exploring</h4>

          </div>
        )
      }
    }
    return(
      <Layout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <MenuLayout display={this.state.display} selectStartTrip={this.selectStartTrip} selectViewBus={this.selectViewBus} userType={this.props.userType}/>
              </div>
              <div className="col-md-9">
              {displayView()}
            </div>
          </div>
        </div>


    </Layout>
    )
  }
}
export default Dashboard
