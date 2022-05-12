console.log('labas');

let skaicius = 444;
let nulis = 0; //false
let netikrasSkaicius = '444';
let netikrasNulis = '0';
let tusciasStringas = ''; //false
let loginis = false;

console.log(typeof skaicius);
console.log(typeof netikrasSkaicius);
console.log(typeof loginis);

console.log('----------');
console.log(!!skaicius);
console.log(Boolean(skaicius)); //tas pats kaip eilute auksciau
console.log(!!nulis);

console.log('----------');
console.log(!!netikrasSkaicius);
console.log(!!netikrasNulis);
console.log(!!tusciasStringas);

console.log('-----------');
if (tusciasStringas) {
  console.log('Yes');
} else if (skaicius) {
  console.log('Nezinau');
} else {
  console.log('No');
}

console.log('-----------');
if (8 == '8') {
  console.log('Yes');
} else {
  console.log('No');
}

console.log('-----------');
console.log(true || true);
console.log(false || true);
console.log(0 || 1);
console.log(1 || true);
console.log(false || false);
console.log('-----------');
console.log(false && false);
console.log(true && false);
console.log(true && true);

console.log('-----------');
if (5 > 8 || 6 > 3) {
  console.log('Yes');
} else {
  console.log('No');
}
if (5 > 8 && 6 > 3) {
  console.log('Yes');
} else {
  console.log('No');
}

console.log('----------');
if (!(5 > 8 && 6 > 3)) {
  console.log('Yes');
} else {
  console.log('No');
}

/*
konvertuojant teigini i neigini pakeiciam ne tik zenkla, bet ir pridedam arba nuimam =
> <===> <=
< <===> >=
== <===> !=
or konvertuojamas i and
|| <===> &&
*/

// i Boolean verciam !!5
// i Number + '5'
// i String '' + 5
console.log('---------');

let kas = 'tas';

switch (kas) {
  case 'anas':
    console.log('ANAS');
  case 'tas':
    console.log('TAS');
  case 'antis':
    console.log('ANTIS');
  default:
    console.log('LABANAKT');
}
console.log('--------');
switch (kas) {
  case 'anas':
    console.log('ANAS');
    break;
  case 'tas':
    console.log('TAS');
    break;
  case 'antis':
    console.log('ANTIS');
    break;
  default:
    console.log('LABANAKT');
}
// kintamasis deklaruotas if viduje is bloko neiseina
// if (3 < 7) {
//   let a = 'valio';
// }
// console.log(a);

let b;
if (3 < 7) {
  b = 'valio';
}
console.log(b);
