import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import {GameContainer, Game} from "./components/Game";
import data from "./data.json";

// import './App.css';

class App extends Component {

  state = {
    score: 0,
    highScore: 0,
    message: "Click to begin",
    data: data.sort(() => Math.random - 0.5)
  }

  checkHighScore() {
    if(this.state.score === 12){
      return this.state.score;
    }else if(this.state.highScore === this.state.score){
      return this.state.score + 1;

    }
    else{
      return this.state.highScore;
    }
  }

  handleClick = item => {
    console.log(item);
    let stateArray = this.state.data.slice();

    if(!item.clicked){
      console.log("this hasn't been clicked yet, so we get a point");
      for(let i = 0; i < stateArray.length; i++){
        if(stateArray[i].id == item.id){
          stateArray[i].clicked = true;
        }
      }

      this.setState({
        score: (this.state.score + 1),
        highScore: this.checkHighScore(),
        message: "That hadn't been clicked yet, so you get a point!",
        data: stateArray.sort(()=> Math.random() - 0.5)
      });
    } else {
      console.log("That item was already clicked");

      // for(let i = 0; i < data.length; i++){
      //   data[i].clicked = false;
      // }

      this.setState({
        score: 0,
        highScore: this.checkHighScore(),
        message: "That has already been clicked, please start over!",
        data: data.sort(()=> Math.random() -0.5)
      });
    }
  }

  componentDidMount(){
    console.log("this is our initail state: ", this.state);
  }

  componentDidUpdate(){
    console.log("That state changed, here is our new state: ", this.state);
  }

  render() {

    return (
      <div className="App">
        <Nav message={this.state.message} score={this.state.score} highScore={this.state.highScore} />
        <Jumbotron />
        <GameContainer>
          {this.state.data.map(item => {
            return (
              <Game
                key={item.id}
                id={item.id}
                image={item.image}
                clicked={item.clicked}
                handleClick={this.handleClick}
              />
            );
          })}          
        </GameContainer>
        </div>
    );    
  }
}

export default App;
