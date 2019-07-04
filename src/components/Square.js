import React from 'react';

export class Square extends React.Component {
    /**
     *
     * @return {*}
     */
    render() {
        const {value, isActive, onClick} = this.props;
        let className = isActive ? 'square active' : 'square';
        return (<button className={className} onClick={onClick}>{value}</button>);
    }
}
