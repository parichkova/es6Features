const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.tester;
  }
};
const engineeringTeam = {
  testingTeam,
  qa: "Marcus",
  lead: "Dave",
  engineer: "Pete",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* testingTeam;
  }
};

const names = [];

for (const name of engineeringTeam) {
  names.push(name);
}

console.log(names);
