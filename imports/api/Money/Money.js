import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Money = new Mongo.Collection('money');

Meteor.methods({
    'money.insert'(dataObj) {
        Money.insert({ dataObj });
    },
    'money.update'() {
        //was some method about ypdate money collectuin)
    }
})
