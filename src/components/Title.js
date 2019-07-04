import React from 'react';

export class Title extends React.Component {
    /**
     *
     * @param squares
     * @return {boolean}
     */
    static canContinuePlaying(squares) {
        for (let i = 0; i < squares.length; i++) {
            if (!squares[i]) {
                return true;
            }
        }
        return false;
    }

    /**
     *
     * @return {*}
     */
    renderRestart() {
        const {onClickRestart} = this.props;
        return (
            <button className={'btn-restart'} onClick={onClickRestart}>Click to replay</button>
        )
    }

    /**
     *
     * @return {*}
     */
    render() {
        const {squares, winnerLine} = this.props;
        const canContinuePlaying = Title.canContinuePlaying(squares);

        if (winnerLine.length) {
            return (
                <h1 className={'title'}>Winner: {squares[winnerLine[0]]} !
                    {
                        this.renderRestart()
                    }
                </h1>
            )
        }

        if (!canContinuePlaying) {
            return (
                <h1 className={'title'}>Draw!
                    {
                        this.renderRestart()
                    }
                </h1>
            )
        }

        const {currentPlayer} = this.props;
        return (
            <h1 className={'title'}>Next Player: {currentPlayer}</h1>
        )
    }
}
