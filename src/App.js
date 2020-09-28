import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      data2: ["a","s","d","f"]
    }
  }

  

  componentDidMount() {
    Tabletop.init({
      key: '1ALFqeNZK7G0_jVmIdv_9cPyjFf4qrrJKoE-CWKWm1bc',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }
  
  render() {
    console.log("data", this.state.data)
    const { data } = this.state;
    let data2 = [...this.state.data]

  
    console.log("data2", data2)
    return (

      <div className="App">
        <header >
          
          <h1 className="App-title"><font color="black">Wszystkie</font></h1>
        </header>
         <div id="list" className="App">
           <table className="App-table">

          {
            data.map((obj) => {
              return (
                     
                       <tr key={obj.Number}>
                         <td className="App-td">{obj.Number}</td>
                         <td className="App-td">{obj.Color}</td>
                         <td className="App-td">{obj.thersehold}</td>
                       </tr>
                      
                      
             )
             
            })
          }
        </table>
        </div>
        
        <div id="choosen25">
          <h1>Kolory z przedziału do 25$</h1>
          <table className="App-table">
          {
            data.map((obj) => {
              if (obj.thersehold < 25) {
                return (
                  <tr key={obj.Number}>
                  <td className="App-td">{obj.Number}</td>
                  <td className="App-td">{obj.Color}</td>
                  <td className="App-td">{obj.thersehold}</td>
                </tr>
                )
                } 
            })
          }
          </table>
        </div>

        <div id="choosen100">
          <h1>Kolory z przedziału od 25 do 100$</h1>
          <table className="App-table">
          {
            data.map((obj) => {
              if (obj.thersehold > 25 && obj.thersehold <=100) {
                return (
                  <tr>
                  <td className="App-td">{obj.Number}</td>
                  <td className="App-td">{obj.Color}</td>
                  <td className="App-td">{obj.thersehold}</td>
                </tr>
                )
                } 
            })
          }
          </table>
        </div>

      </div>

    );
  }
}

export default App;