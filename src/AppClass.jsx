import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  render() {
    return (
      <div className="App">
        <h1>Elephant Images</h1>
        <div className="image-container">
          {this.imageData().map((item) => (
            <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} />
          ))}
        </div>
      </div>
    );
  }
}
