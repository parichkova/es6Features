var expense = {
    type: 'Business',
    amount: '$45 USD'
};

var type = expense.type;
var amount = expense.amount;

//this is a lot of duplication

//destructuring solves this like;

const { type } = expense;
const { amount } = expense; 

// we still have duplication, so

const {type, amount} = expense;

//the objectProperty and the variable should be the same.
//if I write something like this const { myType, amount } = expense; myType is undefined.
