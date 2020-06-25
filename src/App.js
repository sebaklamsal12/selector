import React, { Component } from 'react';
import './App.css';
import Shape from './Shape';
class Selector extends Component {

    class Selector extends Component {
        constructor() {
            super();
            this.state = {
                selectedShape: 'square',
            };
        }
        selectShape = () => {
            this.setState({
                selectedShape: shape,
                isClicked: 'true'
            });
        };

        render() {
            console.log('here is my state', this.state);
            const { selectShape } = this.state;
            console.log('this is my decleared function', this.selectShape)
            return (



                <
                div className = "container" >
                <
                div className = "navbar" >
                <
                div >
                selected: < span > { selectedShape } < /span>

                <
                /div>  <
                div onClick = { this.handleClick } > { isClicked } < /div> <
                /div>

                <
                div className = "shape-list" >
                <
                shape shape = "square"
                selectShape = { this.selectShape }
                /> <
                shape shape = "circle"
                selectShape = { this.selectShape }
                /> <
                shape shape = "traingle"
                selectShape = { this.selectShape }
                />

                <
                /div >  <
                /div>
            )
        }

    }
    export default Selector;