import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Meteor } from 'meteor/meteor';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },

    textField: {
        flexBasis: 200,
    },
});

const ranges = [
    {
        value: '0-20',
        label: '0 to 20',
    },
    {
        value: '21-50',
        label: '21 to 50',
    },
    {
        value: '51-100',
        label: '51 to 100',
    },
];

const transaction_type = [
    {
        value: "income",
        label: 'income',
    },
    {
        value: "waste",
        label: 'waste',
    }
];
const wallets = [
    {
        value: "wallets1"
    },
    {
        value: "wallets2"
    }
];

class AddForm extends React.Component {
    state = {
        transaction_type: '',
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };
    handleSubmit() {
        console.log("yaaa bitch");
        let docObj = {
            2: 2,
            1: 2
        }
        //Meteor.call('money.insert',docObj)
    }
    render() {
        const { classes } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className={classes.root}>
                    <FormControl fullWidth className={classes.margin}>
                        <TextField
                            select
                            label="Transaction Type"
                            className={classNames(classes.margin, classes.textField)}
                            value={this.state.weightRange}
                            onChange={this.handleChange('transaction_type')}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                            }}
                        >
                            {transaction_type.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                    
                    <TextField
                        select
                        label="With Select"
                        className={classNames(classes.margin, classes.textField)}
                        value={this.state.weightRange}
                        onChange={this.handleChange('weightRange')}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                        }}
                    >
                        {ranges.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <FormControl  className={classes.margin}>
                        <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                        <Input
                            id="adornment-amount"
                            type="number"
                            min="0"
                            onChange={this.handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>

                    <FormControl className={classNames(classes.margin, classes.textField)}>
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            className="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth className={classes.margin}>
                        <TextField
                            id="notes"
                            label="Notes"
                            multiline
                            rowsMax="4"
                            value={this.state.multiline}
                            onChange={this.handleChange('multiline')}
                            className="notes"
                            margin="normal"
                        />
                    </FormControl>
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        );
    }
}

AddForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddForm);
