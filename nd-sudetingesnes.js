console.log('-----1-----');
// Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pirmas = rand(5, 25);
let antras = rand(5, 25);
let trecias = rand(5, 25);
console.log(pirmas);
console.log(antras);
console.log(trecias);

console.log('---A---');
// Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
let sum = pirmas + antras + trecias;
console.log('Suma = ' + sum);

console.log('---B---');
// Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
console.log('' + pirmas + antras + trecias);

console.log('---C---');
// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
console.log('' + pirmas + ' ' + antras + ' ' + trecias);

console.log('---D---');
// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
console.log('' + pirmas + ' ' + antras + ' ' + trecias + ' suma: ' + sum);

console.log('-----2-----');
// Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;
let skaicius = rand(5, 10);
console.log(skaicius);

console.log('-----3-----');
// Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;
let labas = 'labas';
for (let i = 0; i < 5; i++) {
  console.log(labas);
}

console.log('-----4-----');
// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
for (let i = 0; i < 7; i++) {
  console.log(skaicius);
}

console.log('-----5-----');
// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;
for (let i = 0; i < skaicius; i++) {
  console.log(skaicius);
}

console.log('-----6-----');
// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
if (skaicius > 7) {
  for (let i = 0; i < skaicius; i++) {
    console.log(skaicius);
  }
} else {
  console.log('sugeneruotas skaicius mazesnis uz 7');
}

console.log('-----7-----');
// Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
let kintamasis;

console.log('---A---');
// Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
let suma = 0;
let stringas = '';
for (let i = 0; i < 5; i++) {
  kintamasis = rand(10, 20);
  console.log(kintamasis);
  suma += kintamasis;
  stringas += kintamasis + ' ';
}

console.log('---B---');
// Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
console.log('suma: ' + suma);

console.log('---C---');
// Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;
console.log(stringas);

console.log('---D---');
// Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;
console.log(stringas + ' ' + 'suma: ' + suma);

console.log('-----8-----');
// Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
console.log('---A---');
// Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
let num;
let iteracijos = 0;
let numSum = 0;
let netinkamiNum = 0;
let lyginiai = 0;
let nelyginiai = 0;
let bent20Iteraciju = 0;
do {
  do {
    num = rand(10, 25);
    console.log(num);
    iteracijos += 1;

    if (num < 18) {
      numSum += num;
    } else {
      netinkamiNum += 1;
    }

    if (num % 2 === 0) {
      lyginiai += 1;
    } else {
      nelyginiai += 1;
    }
  } while (num > 12);
  bent20Iteraciju += 1;
} while (iteracijos < 20);

console.log('---B---');
// Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
console.log('Buvo atlikta ' + iteracijos + ' iteracija/os/u.');

console.log('---C---');
// Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
console.log('Suma, atmetus skaicius : ' + numSum);

console.log('---D---');
// Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
console.log(
  'Suma, atmetus skaicius : ' +
    numSum +
    '. Atmesta : ' +
    netinkamiNum +
    ' skaiciai/iu.'
);

console.log('---E---');
// Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
console.log(
  'Buvo sugeneruota ' +
    lyginiai +
    ' lyginiu ir ' +
    nelyginiai +
    ' nelyginiu skaiciu.'
);

console.log('---F---');
// Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje.
console.log(
  'Ciklas pakartotas ' +
    bent20Iteraciju +
    ' kartu, kad butu ne maziau 20-ties iteraciju.'
);

console.log('-----9-----');
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
let randomSk;
let isorinisCiklas = 0;
let vidinisCiklas = 0;
do {
  randomSk = rand(5, 10);
  console.log(randomSk);
  for (let i = 0; i < randomSk; i++) {
    vidinisCiklas += 1;
  }
  isorinisCiklas += 1;
} while (randomSk !== 5);

console.log('---A---');
// Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
console.log(
  'Isorinis ciklas prasisuko ' +
    isorinisCiklas +
    ' kartus/u, vidinis ciklas prasisuko ' +
    vidinisCiklas +
    'kartus/u.'
);

console.log('---B---');
// Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
isorinisCiklas = 0;
vidinisCiklas = 0;
let penki = 0;
do {
  randomSk = rand(5, 10);
  console.log(randomSk);
  for (let i = 0; i < randomSk; i++) {
    vidinisCiklas += 1;
  }
  if (randomSk === 5) {
    penki++;
  }
  isorinisCiklas += 1;
} while (penki !== 3);
console.log(
  'Isorinis ciklas prasisuko ' +
    isorinisCiklas +
    ' kartus/u, vidinis ciklas prasisuko ' +
    vidinisCiklas +
    'kartus/u.'
);

console.log('---C---');
// Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;
isorinisCiklas = 0;
vidinisCiklas = 0;
let trisPenketaiIsEiles = 0;
let skaiciuMasyvas = [];
do {
  randomSk = rand(5, 10);
  console.log(randomSk);
  for (let i = 0; i < randomSk; i++) {
    vidinisCiklas += 1;
  }
  skaiciuMasyvas[isorinisCiklas] = randomSk;
  for (let i = 0; i < skaiciuMasyvas.length; i++) {
    if (
      skaiciuMasyvas[i] === 5 &&
      skaiciuMasyvas[i - 1] === 5 &&
      skaiciuMasyvas[i - 2] === 5
    ) {
      trisPenketaiIsEiles++;
    }
  }

  isorinisCiklas += 1;
} while (trisPenketaiIsEiles !== 1);

console.log(skaiciuMasyvas);
console.log(
  'Isorinis ciklas prasisuko ' +
    isorinisCiklas +
    ' kartus/u, vidinis ciklas prasisuko ' +
    vidinisCiklas +
    ' kartus/u.'
);

console.log('-----10-----');
// Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.
let kazioPoints = 0;
let petroPoints = 0;

do {
  let kazioPartija = rand(5, 25);
  let petroPartija = rand(10, 20);
  if (kazioPartija > petroPartija) {
    console.log('Partija laimejo: Kazys, surinko : ' + kazioPartija);
    kazioPoints += kazioPartija;
    petroPoints += petroPartija;
    console.log('Kazio taskai : ' + kazioPoints);
    console.log('Petro taskai : ' + petroPoints);
  } else if (petroPartija > kazioPartija) {
    console.log('Partija laimejo: Petras, surinko: ' + petroPartija);
    petroPoints += petroPartija;
    kazioPoints += kazioPartija;
    console.log('Petro taskai : ' + petroPoints);
    console.log('Kazio taskai : ' + kazioPoints);
  }
} while (kazioPoints <= 222 && petroPoints <= 222);
