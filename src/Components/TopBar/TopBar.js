import React, { Component } from 'react'
import classes from './TopBar.module.css'



class TopBar extends Component {
// state = {
//     inputText : ''
// }
//     HandleInput = (e) => {
// // alert(e.target.value)
// this.setState({inputText : e.target.value})
//     }
    render() {


        return (
            <div className={classes.TopBar}>
                <h1 className={classes.Logo}>LiveWire</h1>
                <input type="search" className={classes.SearchField} onChange={(e)=>this.props.HandleInputs(e)}  />
            </div>
        )
    }
}

export default TopBar


