import React, { Component } from 'react';
import "./Counter.css"
export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state ={
            count:0, 
            // name: this.props.name,
          }
    }
    increment=()=>{
        this.setState((prevState)=>{
            return{
                count: prevState.count+1
            }
        }) 
    }
    decrement=()=>{
        if(this.state.count>0)
        {
            this.setState((prevState)=>{
                return{
                    count: prevState.count-1
                }
            }) 
        }
    }
    render() { 
        return ( 
            <div className='counterdiv'>
                <h2>Counter: {this.state.count}</h2>
                <h4>Item Name: {this.props.name}</h4>
                <button onClick={this.increment}>Increment Count</button> &nbsp;
                <button onClick={this.decrement}>Decrement Count</button><br/>
                <button onClick={()=>{
                    this.props.delete(this.props.index)}}>Delete</button>
            </div>
         );
    }
}
 


