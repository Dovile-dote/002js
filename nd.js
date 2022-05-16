console.log('-----1-----');
// console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
for (let i = 0; i < 5; i++) {
  console.log('Labas');
}

console.log('-----2-----');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log('-----3-----');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
let num = 0;
for (let i = 0; i < 5; i++) {
  console.log(num);
  num += 10;
}

console.log('-----4-----');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
num = 49;
for (let i = 0; i < 5; i++) {
  console.log(num);
  num += 1;
}

console.log('-----5-----');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
num = 4;
for (let i = 0; i < 5; i++) {
  console.log(num);
  num -= 1;
}

console.log('-----6-----');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
num = 0;
for (let i = 0; i < 5; i++) {
  console.log(num);
  num += 2;
}

console.log('-----7-----');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
  console.log(rand(0, 10));
}

console.log('-----8-----');
// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
do {
  num = rand(0, 10);
  console.log(num);
} while (num !== 5);

console.log('-----9-----');
// console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
let randomNumber;
let sum = 0;
do {
  randomNumber = rand(0, 10);
  console.log(randomNumber);
  sum += randomNumber;
} while (sum <= 100);

console.log('-----10-----');
// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
let loopsCount = 0;
do {
  num = rand(0, 10);
  console.log(num);
  loopsCount += 1;
} while (num !== 5 && num !== 7);
console.log('Prasisuko ' + loopsCount + ' ciklai');

console.log('-----11----');
// console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
sum = 0;
loopsCount = 0;
do {
  num = rand(0, 10);
  console.log(num);
  sum += num;
  loopsCount += 1;
} while (sum < 20 || loopsCount < 11);
console.log('suma:' + sum);
console.log('prasisuko ' + loopsCount + ' ciklu/ai.');

console.log('-----12-----');
// console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
let nelyginiai = 0;
do {
  num = rand(0, 10);
  console.log(num);
  if (num % 2 !== 0) {
    nelyginiai += 1;
  }
} while (nelyginiai < 3);

console.log('-----13-----');
// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
let first;
let second;
do {
  first = rand(0, 10);
  second = rand(0, 10);
  console.log(first + ' ' + second);
} while (first !== second);

console.log('-----14-----');
// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
count = 0;
let sum1 = 0;
let sum2 = 0;
do {
  first = rand(0, 10);
  sum1 += first;
  second = rand(0, 10);
  sum2 += second;
  console.log(first + ' ' + second);
} while (sum1 < 100 || sum2 < 100);
console.log('suma vienas: ' + sum1);
console.log('suma du: ' + sum2);

console.log('-----15-----');
// console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).
let nelyginiuSum1 = 0;
let nelyginiuSum2 = 0;
count = 0;
do {
  first = rand(0, 10);
  second = rand(0, 10);
  console.log(first + ' ' + second);

  if (first % 2 !== 0) {
    nelyginiuSum1 += 1;
  }

  if (second % 2 !== 0) {
    nelyginiuSum2 += 1;
  }

  count += 1;
} while (nelyginiuSum1 < 3 || nelyginiuSum2 < 3);

console.log('kiek ciklu: ' + count);
console.log(
  'Pirmame stulpelyje sugeneravo: ' +
    nelyginiuSum1 +
    ' nelyginius/iu skaicius/iu, antrame: ' +
    nelyginiuSum2
);
