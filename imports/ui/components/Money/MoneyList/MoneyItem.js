import React from 'react';
import { render } from 'react-dom';

export default class MoneyItem extends React.Component {
    renderMoneyItem() {
        return this.props.money.name
    }
    render() {
        return (
            <div>
                {this.renderMoneyItem()}
            </div>
        )
    }
}