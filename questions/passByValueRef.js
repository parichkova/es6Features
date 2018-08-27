var myObject = {
    price: 20.99,
    get_price: function() {
      return this.price;
    }
};

var customObject = Object.create(myObject);

customObject.price = 19.99;
delete customObject.price;

console.log(customObject.get_price()); //20.99, ako nqmashe delete shteshe da e 19.99

/* task 2 */
(function(a) {
    //a e 5
    arguments[0] = 10;

    return a; //promenq da e 10
})(5);

function Car(color) {
    this.color = color;
}

var lada = new Car("Black");

Car.prototype.currentGear = 1;
console.log(++lada.currentGear); //promenq da e 2
console.log(Car.prototype.currentGear); //ostawa si 1

var User = function() {};

User.prototype.attributes = {
  isAdmin: false
}; //poneje attributes e obekt, toi e referenten type, kogato promenqm attributes.isAdmin, promenqm towa, kym koeto sochi referenciqta, user.prototype.

var admin = new User("Sam"),
  guest = new User("Bob");

admin.attributes.isAdmin = true;

alert(admin.attributes.isAdmin);
alert(guest.attributes.isAdmin);
  
//za da ne wryshtat true i dwete, shte si go naprawq s primitiwen tip, a ne referenten, toest na prototipa zakacham samo
// zakacham: User.prototype.isAdmin = false.

var obj = {
    attributes: {
        a: 1
    }
}

(function(obj) {
    console.log(obj);
    obj.attributes.a = 2;
    console.log(obj) // a:2
})(obj);

console.log(obj.attributes.a); // a e 2 ako promenqsh referenten tip.

var obj = {
    a: 1
  };
  (function(obj) {
    obj = {
      a: 2
    };
  })(obj);
  console.log(obj.a); //1 ?!


var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 }; // foo.x e undefined


var a = {};

(function b ( a ) {
    a.a = 10;
    a = null;
})( a );

console.log(a); // a: 10

