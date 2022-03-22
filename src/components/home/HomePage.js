import React, {useState} from "react";
import { Link } from "react-router-dom";


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date ()
    }

  }
    
  setDate (e) {
    this.setState({date: e});
  }
  render () {
    return (
      <>
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>React, Redux and React Router for ultra-responsive web apps.</p>
          <Link to="about" className="btn btn-primary btn-lg">
            Learn more
          </Link>
        </div>
       
        <i className="pi pi-check p-mr-2"></i>
      </>
    )
  }
  
  
}

export default HomePage;
