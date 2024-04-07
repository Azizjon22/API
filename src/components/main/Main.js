import React, { Component } from 'react'
import axios from "axios";
import "./main.css"
export default class Main extends Component {


  constructor(props) {
    super(props);
    this.state = {
        products: []
    }
}

componentDidMount() {
    axios.get("https://dummyjson.com/products")
            .then((res) => {
                console.log(res);
                this.setState({
                  products: res.data.products
                })
            })

            .catch(() => {
                alert("backend bn bogliq hatolik")
            })
}


  render() {
    return (
      <>


<div className="container">
                   <div className="row">
                       {this.state.products.map((item,index) => {
                           return (
                               <div className="col-4 mt-3" key={index}>
                                   <div className="card">
                                       <div className="card-header">
                                           <h3>{item.title}</h3>
                                       </div>

                                       <div className="card-body">
                                           <img className="w-100" src ={item.thumbnail}  alt="Error"/>
                                       </div>

                                       <div className="card-footer">
                                           <p>{item.body}</p>
                                       </div>
                                   </div>
                               </div>
                           )
                       })}
                   </div>
               </div>

        


      </>
    )
  }
}
