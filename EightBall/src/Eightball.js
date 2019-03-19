import React, { Component } from 'react';
import answers from './answers';
import './Eightball.css';

class EightBall extends Component {
    
    // 
    static defaultProps = { answers };

    constructor(props) {
      super(props);
        this.state = {
          color: "black",
          msg: "Think of a Question, you weirdo!",
        };
        this.handleClick = this.handleClick.bind(this);
      }

    getRandom() {
    return Math.floor(Math.random() * this.props.answers.length)
    }

    handleClick(evt) {
        let idx =  this.getRandom() ;
        this.setState({ color: this.props.answers[idx].color,
                        msg: this.props.answers[idx].msg});
    }
    
    render (){
      let color ={
        background: this.state.color,
      }
        return (
            <button onClick={this.handleClick} className="Eightball" style={color} >
            {this.state.msg}
          </button>
        ); 
    }
}

export default EightBall;
