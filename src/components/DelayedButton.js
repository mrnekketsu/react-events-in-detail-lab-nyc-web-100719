// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{
    handleClickEvent = (e) => {
        //console.log(e)
        e.persist()
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }
    
    render(){
        return <button onClick={this.handleClickEvent}>Delayed CLICK MEH!</button>
    }
}
