const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [ name ] = companies; //Google


const [name, ...theOthers] = companies; //Google, Facebook, Uber
// theOthers is Facebook, Uber

let { lenth } = companies; // 3
let { name } = companies; //undefined
