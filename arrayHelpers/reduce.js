let numbers = [10, 20, 30];
let sum = 0;


numbers.reduce((sum, num) => {
    return sum+= num;
}, 0);

let primaryColors = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'yellow'},
];

primaryColors.reduce((accumulator, color) => {
    accumulator.push(color.color);
    return accumulator;
}, []);


function balancedParens(string) {
    return !string.split("").reduce((previous, char)=> {
        if (previous < 0 ) {
            return previous
        }

        if (char === '(') {
            return ++previous;
        }

        if (char === ")") {
            return --previous;
        }

        return previous;
    }, 0) 
}

let desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
let deskTypes = desks.reduce(function(tally, type) {
    ++tally[type];
      
    return tally;
}, { sitting: 0, standing: 0 });

//да се направи метод, който връща само уникални стойности;

function unique(array) {
    return array.reduce((previous, current) => {
      let value = previous.find((unique) => {
          return unique === current
        });

      if(!value) {
        previous.push(current);    
      }

      return previous;
    }, []);
  }

[2,2,3,4,5,8,8,9].reduce((arr, el) => {
	return arr.includes(el) ? arr : [...arr,el]
}, [])