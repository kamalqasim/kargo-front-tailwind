import React, {useState} from "react";
import { Link } from "react-router-dom";


class HomePage extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      date: new Date (),
      dark: false
    }

    this.changeDark = this.changeDark.bind(this);

  }
    
  setDate (e) {
    this.setState({date: e});
  }
  changeDark (event) {

    if (this.state.dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    this.setState({dark: !this.state.dark});

  }
  render () {
    return (
      <>

        <div className="columns-2 mb-1.5">
          <p>Well, let me tell you something, ...</p>
          <p className="break-after-column">Sure, go ahead, laugh...</p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>
        <div className="columns-1">

          <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <div>
              <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">{/* ... */}</svg>
              </span>
            </div>
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{JSON.stringify(this.state.dark)}</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
          </div>
          
        </div>
        

        <button onClick={this.changeDark}>Dark ele</button>
      </>
    )
  }
  
  
}

export default HomePage;
