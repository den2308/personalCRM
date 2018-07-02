import React from 'react';
import('bootstrap')
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/components/App/App.js';

export default class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <App />
            </div>
        )
    }
}


Meteor.startup(() => {
    render(<MainComponent />, document.getElementById("app"));
});