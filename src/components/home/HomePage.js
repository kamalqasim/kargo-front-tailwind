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

        <header
          class="flex items-center justify-center h-80  bg-fixed bg-center bg-cover bg-no-repeat bg-home-pattern"
        >
          <div class="p-10 text-2xl text-white bg-maincolor bg-opacity-70 rounded-xl font-bold">
            <h1> 
              Kargoo! 
              Ölkə boyu çatdırırıq!
            </h1>
          </div>
        </header>

        <div className="md:container -mt-5 bg-white pt-5 rounded">
          <div className="pt-5 shadow-md">
           <div className="w-full text-left ml-4" >
            <p className="text-blue-400 text-2xl font-bold ">Kalkulator</p>
           </div>
            <form className="columns-4 pb-5 px-4">
              <div className="w-full mb-5">
                <label for="weight">En</label>
                <input type="number" placeholder="sm" className="w-full border-maincolor border-solid border-2 rounded p-2"/>
              </div>
              <div className="w-full mb-5">
                <label for="weight">Uzunluq</label>
                <input type="number"  placeholder="sm"  className="w-full border-maincolor border-solid border-2 rounded p-2"/>
              </div>
              <div className="w-full mb-5">
                <label for="weight">Hündürlük</label>
                <input type="number"  placeholder="sm"  className="w-full border-maincolor border-solid border-2 rounded p-2"/>
              </div>
              <div className="w-full mb-5">
                <label for="weight">Çəki</label>
                <input type="number"  placeholder="kq"  className="w-full border-maincolor border-solid border-2 rounded p-2"/>
              </div>

              <div className="w-full mb-5">
                <label for="weight">Ölkəni seçin</label>
                <input type="number" className="w-full border-maincolor border-solid border-2 rounded p-2"/>
              </div>
              <div className="w-full mb-5">
                <label for="weight">Çatdırılma növü</label>
                <input type="number" className="w-full border-maincolor border-solid border-2 rounded p-2"/>
              </div>
              <div className="w-full mb-5">
                <label for="weight">Çəki</label>
                <input type="number" className="w-full border-maincolor border-solid border-2 rounded p-2"/>
              </div>
              <div className="w-full mb-5">
                <label for="weight">Qiyməti</label>
                <input type="number" className="w-full border-maincolor border-solid border-2 rounded p-2"/>
              </div>
            </form>
          </div>
          
        </div>
       
       
       

        <button onClick={this.changeDark}>Dark ele</button>
      </>
    )
  }
  
  
}

export default HomePage;
