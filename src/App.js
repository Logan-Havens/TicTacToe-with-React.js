import React, { Component } from "react";

import Announcement from './Announcement';
import ResetButton from './ResetButton';
import Tile from './Tile'; 
import './App.css';


class App extends Component {
    constructor() {
       super();
       this.state = {
        gameBoard: [
            ' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' ',
        ],
        turn: 'x',
        winner: null
       }
    }
    updateBoard(loc, player) {
        
        if (this.state.gameBoard[loc] === 'x' || this.state.gameBoard[loc] === 'o') {
            return;
        }
    
        
        const updatedBoard = [...this.state.gameBoard];
        updatedBoard[loc] = player;
    
        
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        
        let winner = null;
        for (let combination of winningCombos) {
            const [a, b, c] = combination;
            if (updatedBoard[a] === player && updatedBoard[b] === player && updatedBoard[c] === player) {
                winner = player;
                break;
            }
        }
    
        
        const isDraw = updatedBoard.every(cell => cell === 'x' || cell === 'o');
    
        
        this.setState({
            gameBoard: updatedBoard,
            turn: player === 'x' ? 'o' : 'x',
            winner: winner || (isDraw ? 'd' : null) 
        });
    }
    
    resetBoard(){
        this.setState({
            gameBoard: [
                ' ', ' ', ' ',
                ' ', ' ', ' ',
                ' ', ' ', ' ',
            ],
            turn: 'x',
            winner: null
        })
    }
    render() {
        return (
            <div className="container">
                <div className="menu">
                    <h1>Tic-Tac-Toe</h1>
                    <Announcement winner={this.state.winner}/>
                    <ResetButton reset={this.resetBoard.bind(this)} /> 
                </div>
                {this.state.gameBoard.map((value, i) => (
    <Tile key={i} loc={i} value={value} updateBoard={this.updateBoard.bind(this)} turn={this.state.turn} />
))}

                
            </div>
        )
    }
}

export default App;