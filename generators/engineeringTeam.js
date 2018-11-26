const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};
const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    qa: 'Alex',
    dev: 'Dave'
};

function* teamIterator(team) {
    yield team.lead;
    yield team.qa;
    yield team.dev;

    const testingTeamGenerator = testingTeamIterator(team.testingTeam);
    
    yield* testingTeamGenerator;
}

function* testingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const names = [];

for (const name of teamIterator(engineeringTeam)) {
    names.push(name);
}

console.log(names);