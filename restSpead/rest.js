//const numbers = [1,2,3,4,6,10];

function sum (...numbers) {
    return numbers.reduce((sum, num) => {
        sum+num;
    }, 0)
}


//if I want to pass numbers, not array like this

sum(1,2,3,4,5,6,7,8,8,99);

//rest make elements into array
//when you dont know how many arrguments do you have
//rest GATHERS TOGETHER variables

