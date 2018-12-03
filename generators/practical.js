// tree data structure

class Comment {
  constructor(value, children) {
    this.content = value;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment("good", []),
  new Comment("bad", []),
  new Comment("so-so", [])
];

const tree = new Comment("great post", children);

const values = [];

for (let value of tree) {
  values.push(value);
}
