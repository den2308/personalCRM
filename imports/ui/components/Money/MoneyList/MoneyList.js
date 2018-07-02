import React from 'react';
import { render } from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Money } from '../../../../api/Money/Money';
import MoneyItem from './MoneyItem';

class MoneyList extends React.Component {
    renderMoneyList() {
        if (this.props.money) {
            return this.props.money.map(function (money) {
                return <MoneyItem key={money._id} money={money} />
            })
        }

    }
    render() {
        return (
            <div>
                {this.renderMoneyList()}
            </div>
        )
    }
}

export default withTracker(() => {
    return {
        money: Money.find({}).fetch(),
    };
})(MoneyList);
