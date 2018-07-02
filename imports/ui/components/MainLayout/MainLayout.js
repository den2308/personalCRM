import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Wallets } from '../../../api/Wallets/Wallets';
import WalletsItem from './WalletsItem/WalletsItem';

class MainLayout extends React.Component {
    renderWallets() {
        return this.props.wallets.map(function (wallet) {
            return <WalletsItem key={wallet._id} wallet={wallet} />
        })
    }
    render() {
        return (
            <div>
                <div className="card">
                    {this.renderWallets()}
                </div>
            </div>
        )
    }
}
export default withTracker(() => {
    return {
        wallets: Wallets.find({}).fetch()
    };
})(MainLayout);