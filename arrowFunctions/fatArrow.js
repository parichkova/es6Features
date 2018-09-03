const add = (a, b) => a+b; 

//is equal to
function add (a, b) {
    return a+b;
}


const double = num => num * 2;

//is equal to
function double(num) {
    return num * 2;
}

const nums = [1,2,3];

let dbld = nums.map(num => num * 2);


const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function () {
        return this.members.map(member, () => `${member} is from ${this.teamName}`);
    }
}

//arrow function-a zapazwa this-a; lexical this

//fibonacci 

const fibonacci = (n) => n < 3 ? 1 : (fibonacci(n - 1) + fibonacci(n - 2));


//this wont work with arrow func

const profile = {
    name: 'Alex',
    getName: function() {
        return this.name;
    }
};
