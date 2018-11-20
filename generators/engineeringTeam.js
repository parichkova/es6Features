const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    qa: 'Alex',
    dev: 'Jason'
};


function* teamIterator(engineeringTeam) {
    yield engineeringTeam.lead;
    yield engineeringTeam.qa;
    yield engineeringTeam.dev;
}

const names = [];

for (const name of teamIterator(engineeringTeam)) {
    names.push(name);
}

console.log(names);