// 1 uzduotis

let pazimys;

while (true) {
  pazimys = prompt(`Iveskite pazymi: `);

  switch (pazimys) {
    case `1`:
    case `2`:
    case `3`:
      console.log(`Neigiamas pazimys! `);
      break;
    case `4`:
    case `5`:
      console.log(`Teigiamas , bet reikia pasistengti! `);
      break;
    case `6`:
    case `7`:
      console.log(`Vidutiniskai , ar tikrai tau to gana? `);
      break;
    case `8`:
    case `9`:
      console.log(`Pagirk save!!! `);
      break;
    case `10`:
      console.log(`Berniukas SUPER!!!`);
      break;
    default:
      console.log(`Pateikta neteisinga reiksme!`);
      continue;
  }
  break;
}

// 2 uzduotis

let menesis;

while (true) {
  menesis = prompt(`Iveskite menesio pavadinima grazinsiu metu laika: `);

  switch (menesis) {
    case `gruodis`:
    case `sausis`:
    case `vasaris`:
      console.log(`priklauso ziemos metu laikui `);
      break;
    case `kovas`:
    case `balandis`:
    case `geguze`:
      console.log(`priklauso pavasario metu laikui `);
      break;
    case `birzelis`:
    case `liepa`:
    case `rugpjutis`:
      console.log(`priklauso vasaros metu laikui `);
      break;
    case `rugsejis`:
    case `spalis`:
    case `lapkritis`:
      console.log(`priklauso rudens metu laikui `);
      break;
    default:
      console.log(`tokio menesio nera kvailuti!`);
      continue;
  }
  break;
}

// 3 uzduotis

let dayTime;

while (true) {
  dayTime = prompt(`Iveskite valandas: `);

  switch (dayTime) {
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
      console.log(`Labas rytas`);
      break;
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
      console.log(`Laba diena`);
      break;
    case "19":
    case "20":
    case "21":
      console.log(`Labas vakaras`);
      break;
    default:
      console.log(`Tokiu valandu as nepazystu EIK MIEGOT! `);
      continue;
  }
  break;
}

// 4 uzduotis

const date = new Date();
const day = date.getDay();
console.log(`${date} ir ${day} `);

// 5 uzduotis

let age = 18;
let haveDriverLicense = true;
let isAdult = true;

if (isAdult && age >= 18) {
  if (haveDriverLicense) {
    console.log("Yra suauges ir turi vairuotojo pazymejima");
  } else {
    console.log("Yra suauges ir neturi vairuotojo pazymejimo");
  }
} else {
  console.log("Yra mazvaikis ir faktas, kad neturi vairuotojo pazymejimo");
}
// 6  uzduotis
let sk;

while (true) {
  sk = prompt(`Įveskite pasirinkta skaiciu`);

  switch (true) {
    case sk > 0:
      console.log(`skaicius teigiamas`);
      break;
    case sk < 0:
      console.log(`neigiamas skaicius`);
      break;
    default:
      console.log(`Skaicius lygus 0`);
      continue;
  }

  break;
}
// 7 uzduotis
const vartotojas = true;
const adminas = true;
const prisijunges = true;

if (prisijunges) {
  if (adminas) {
    console.log(`Prisijunges vartotojas yra adminas`);
  } else {
    console.log(`Prisijunges vartotojas nera adminas`);
  }
} else {
  console.log(`Vartotojas nera prisijunges`);
}
// 8 uzduotis

let vartotojass = prompt("Iveskite kas prisijunges (admin/simple user):");
let prisijungess = confirm("Ar tu online?");
let skelbimoSavininkas = 'simple user';

if (vartotojass === 'admin' && prisijungess) {
    console.log('Ikeltas skelbimas');
} else if (vartotojass === 'simple user' && prisijungess) {
    if (vartotojass === skelbimoSavininkas) {
        console.log('Galite istrinti skelbima arba idėti nauja');
    } else {
        console.log('Galite sukurti');
    }
} else if (vartotojass === 'admin' || (vartotojass === 'simple user' && !prisijungess)) {
    console.log('Jokie veiksmai negalimi...');
} else {
    console.log('Gribaujama!.');
}



// 9 uzduotis
let skaiciukas = prompt("Įveskite skaičių:");

if (skaiciukas > 50) {
  console.log(`${skaiciukas} yra didesnis nei 50.`);
} else if (skaiciukas < 50) {
  console.log(`${skaiciukas} yra mažesnis nei 50.`);
} else {
  console.log(`${skaiciukas} yra lygus 50.`);
}

// 10 uzduotis

const skaiciafke = prompt("Iveskite kokia norite atlikti operacija (+, -, *, /)")
let sk1 = parseInt(prompt("Iveskite sk1"));
let sk2 = parseInt(prompt("Iveskite sk2"));
 if (skaiciafke == "+") {
   console.log(sk1 + sk2);
 } else if (skaiciafke == "-") {
   console.log(sk1 - sk2)
 } else if (skaiciafke == "*") {
   console.log(sk1 * sk2)
 } else {
   console.log(sk1 / sk2)
 }