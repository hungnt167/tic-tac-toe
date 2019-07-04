import React from 'react';
import {Square} from "./Square";

export class Board extends React.Component {
    /**
     *
     * @param value
     * @param index
     * @param isActive
     * @return {*}
     */
    renderSquare(value, index, isActive) {
        const {onClickSquare} = this.props;
        return (
            <Square key={index}
                    value={value}
                    isActive={isActive}
                    onClick={() => onClickSquare(index)}
            />);
    }

    /**
     *
     * @return {*}
     */
    render() {
        const {squares, winnerLine} = this.props;
        return (
            <div className={'board'}>
                {
                    squares.map((value, index) => this.renderSquare(value, index, winnerLine.includes(index)))
                }
            </div>
        )

    }
}
