import React, { Component } from "react";
import './Announcement.css';

export default class Announcement extends Component{
    render() {
        return(
            <div className={this.props.winner ? 'visable' : 'hidden'}>
                <h2>Game Over - {this.props.winner} </h2>
            </div>
        )
    }
}