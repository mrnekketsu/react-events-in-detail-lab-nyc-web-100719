// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

    handleClickEvent = (event) => {
        let coordinatesArr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinatesArr)
    }

    render(){
        return <button onClick={this.handleClickEvent}>CLICK MEH!</button>
    }
}
