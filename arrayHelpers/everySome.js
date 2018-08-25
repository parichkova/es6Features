let computers = [
    {model: 'Acer', ram: 24},
    {model: 'Mac', ram: 32},
    {model: 'MacPro', ram: 64},
];

let everyCanRunPrograms = true;
let onlySomeCanRunPrograms = false;

everyCanRunPrograms = computers.every((computer) => {
    return computer.ram > 24; //false prawi && na ws element
});

onlySomeCanRunPrograms = computers.some((computer) => {
    return computer.ram > 24; //shte wyrne true ima ili
});


function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    this.value.length > 0;
}

let userName = new Field('tish');
let password = new Field('my_pass');
let fields = [userName, password];

let formIsValid = fields.every((field) => {
    return field.validate();
});

