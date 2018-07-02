import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import teal from '@material-ui/core/colors/teal';

import MainLayout from '../MainLayout/MainLayout';
import MoneyMain from '../Money/Money';
import Waste from '../Waste/Waste';
import AddForm from '../AddForm/AddForm';

const styles = theme => ({
    button: {
        position: "absolute",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
});

class MainComponent extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Router>
                <div className="appContainer mx-1 my-1 my-sm-1 my-lg-1 p-1">
                    <div className="card mb-sm-2">
                        <div className="card-body">
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Main</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/money" className="nav-link">Money</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/waste" className="nav-link">Waste</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <Route exact path="/" component={MainLayout} />
                    <Route path="/money" component={MoneyMain} />
                    <Route path="/waste" component={Waste} />
                    <Link to="/addnew" className="nav-link">
                        <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                            <AddIcon />
                        </Button>
                    </Link>
                    <Route exact path="/addnew" component={AddForm} />
                </div>
            </Router>
        )
    }
}

MainComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainComponent);