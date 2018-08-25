let numbers = [3,5,7];
let doubled = numbers.map((number)=> {
    return number * 2;
});


console.log(doubled);


let cars = [
    {model: 'vw', price: 'cheap'},
    {model: 'aston martin', price: 'expensive'}
];

let prices = cars.map(function(car) {
    return car.price;
});

console.log(prices);


function pluck(array, property) {
	let sorted = array.map((el) => {
    	return el[property];
  })
  
  return sorted;
}

let paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
let arr = pluck(paints, 'color');
