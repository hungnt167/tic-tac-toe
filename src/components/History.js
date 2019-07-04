import React from 'react';

export class History extends React.Component {
    /**
     *
     * @param index
     */
    onClickHistory(index) {
        const {histories, updateState} = this.props;
        updateState({
            currentPlayer: histories[index].currentPlayer,
            squares: [...histories[index].squares],
            currentHistory: index
        })
    }

    /**
     *
     * @return {*}
     */
    render() {
        const {histories, currentHistory} = this.props;
        return (
            <div className={'history'}>
                <ul>
                    {
                        histories.map((history, index) => (
                            <li
                                className={currentHistory === index ? 'active' : ''}
                                onClick={() => this.onClickHistory(index)} key={index}>{history.time}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
