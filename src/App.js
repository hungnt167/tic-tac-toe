import React, {Fragment} from 'react';
import {Board} from "./components/Board";
import {History} from "./components/History";
import {Title} from "./components/Title";

export class App extends React.Component {
    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = App.getInitState();
    }

    /**
     *
     * @return {{currentPlayer: string, squares: *[], currentHistory: null, histories: Array}}
     */
    static getInitState() {
        return {
            currentPlayer: 'X',
            squares: [
                null, null, null,
                null, null, null,
                null, null, null,
            ],
            currentHistory: null,
            histories: []
        }
    }

    /**
     *
     * @param state
     */
    updateState(state) {
        this.setState({
            ...this.state,
            ...state,
        })
    }

    /**
     *
     * @param index
     */
    onClickSquare(index) {
        if (this.state.squares[index] || App.calculateWinnerLine(this.state.squares).length) {
            return;
        }

        let newSquares = [...this.state.squares];
        newSquares[index] = this.state.currentPlayer;

        let newCurrentPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
        let newHistories = [...this.state.histories, {
            currentPlayer: newCurrentPlayer,
            squares: newSquares,
            time: (new Date()).toLocaleTimeString()
        }];

        this.setState({
            currentPlayer: newCurrentPlayer,
            squares: newSquares,
            histories: newHistories,
            currentHistory: newHistories.length - 1,
        }, () => {
            console.log(this.state.squares)
        })
    }

    /**
     *
     */
    onClickRestart() {
        this.setState(App.getInitState());
    }

    /**
     *
     * @param squares
     * @return {*}
     */
    static calculateWinnerLine(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return lines[i];
            }
        }
        return [];
    }

    /**
     *
     * @return {*}
     */
    render() {
        const {squares, histories, currentHistory, currentPlayer} = this.state;
        let winnerLine = App.calculateWinnerLine(squares);

        return (
            <Fragment>
                <Title
                    squares={squares}
                    winnerLine={winnerLine}
                    currentPlayer={currentPlayer}
                    onClickRestart={() => this.onClickRestart()}
                />
                <History histories={histories} currentHistory={currentHistory}
                         updateState={(state) => this.updateState(state)}
                />
                <Board onClickSquare={(index) => this.onClickSquare(index)} squares={squares} winnerLine={winnerLine}/>
            </Fragment>
        )

    }
}
