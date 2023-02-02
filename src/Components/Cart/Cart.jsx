import React, { Component } from 'react';
import { Counter } from '../Counter/Counter';
export class Cart extends Component {
    constructor() {
        super();
        this.state={
            count:0,
            items:[
                // {itemName:"toy"},
                // {itemName:"pencil"},
                // {itemName:"eraser"},
                // {itemName:"shirt"}
            ]
        }
    }
    addNewItem=()=>{
        const arr= [...this.state.items];
        arr.push({Name: `Item_ ${this.state.count+1}`})
      
        //*****************Ask Ask Ask****************

        this.setState((prevState)=>{
            return{
                count:prevState.count+1,
                items: arr,
            }
        })
    }

    delete=(index)=>{
        this.setState((prevState)=>{
            const arr=prevState.items.filter((param,index1)=>{
                if(index!==index1)
                return param
            })
            return{
                count: prevState.count-1,
                items:arr,
            }
        })
    }
    reset=()=>{

    }
    render() { 
        return ( 
            <div>
                <h2> Total Unique items {this.state.count}</h2>
                <button onClick={this.addNewItem}>Add items</button>
                {
                    this.state.items.map((param,index)=>{
                        return <Counter key={index} name={param.Name} index={index} delete={this.delete}
                        reset={this.reset} ></Counter>
                    })
                }
                
            </div>
         );
    }
}
