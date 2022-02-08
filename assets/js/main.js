/*---lev1_4---*/
console.log('-----lev1_4-----');

console.log(typeof('John'));
console.log(typeof(3.14));
console.log(typeof(NaN));
console.log(typeof(false));
console.log(typeof([1, 2, 3, 4]));
console.log(typeof({name: 'John', age: 34}));
console.log(typeof(new Date()));
console.log(typeof(function(){}));
console.log(typeof(null));
console.log(typeof(""));
console.log(typeof(3 + 2 == 5));
console.log(typeof(3 + "3"));

/*---lev1_8---*/
console.log('-----lev1_8-----');

// Deklariere die Variablen x = 20, y = 30.
let x = 20;
let y = 30;

// Addiere x und y und gib das Ergebnis in der Konsole aus.
console.log(x + y);

// Subtrahiere y von x und zeige das Ergebnis in der Konsole. Dann subtrahiere x von y und gib das Ergebnis in der Konsole aus.
console.log(y - x);
console.log(x - y);

// Multipliziere x und y und gib das Ergebnis der Konsole aus.
console.log(x * y);

// Teile x durch y und gib das Ergebnis mit der Konsole aus.
console.log(x / y);

// Deklariere eine weitere Variable z mit dem Wert 10. Multipliziere x und y. Teile dann das Ergebnis durch z. Speichere das Ergebnis in einer neuen Variablen namens resultOne.
let z = 10;

let resultOne = x * y / z;
console.log(resultOne);

// Deklariere zwei Variablen a mit dem Wert 15 und b mit dem Wert 9. Zeige den Rest an, wenn a durch b geteilt wird.
let a = 15;
let b = 9;

console.log(a % b);

// Deklariere eine weitere Variable c mit dem Wert 20. Addiere a und b und multipliziere das Ergebnis mit c. Speichere das Ergebnis in der Variable resultTwo. Gib resultTwo in der Konsole aus.
let c = 20;

let resultTwo = (a + b) * c;

console.log(resultTwo);

// Inkrementiere a. Gib das Ergebnis in der Konsole aus.
a++;
console.log(a);

// Dekrementiert b. Gib das Ergebnis in der Konsole aus.
b--;
console.log(b);

// Subtrahiere b von a und speichere das Ergebnis in einer neuen Variablen resultThree.
let resultThree = b - a;
console.log(resultThree);

// Gib den Rest aus wenn resultOne durch resultTwo geteilt wird in der Konsole aus.
console.log(resultOne % resultTwo);