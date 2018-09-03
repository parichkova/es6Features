function saveFile(url, data) {
    $.ajax({method: 'POST', url, data})
    //instead of $.ajax({method: 'POST', url: url, data: data})
}

const color = 'red';
const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};