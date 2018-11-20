function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

for (let color of colors()) {
    console.log(color);
}