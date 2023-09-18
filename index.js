// VLASTNOSTI A METODY
// V konzoli prohlížeče si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.
const title = 'The Lord of the Rings';
document.body.innerHTML += `<p>Název filmu je: ${title}</p>`;
// Vypište do konzole počet znaků názvu.
document.body.innerHTML += `<p>Název filmu obsahuje ${title.length} znaků</p>`;
// // Vypište název filmu převedený na velká písmena.
document.body.innerHTML += `<p>Název filmu s velkými písmeny: ${title.toUpperCase()}</p>`;
// // Vypište z názvu prvních pět písmen.
document.body.innerHTML += `<p>Název filmu s malými písmeny: ${title.toLowerCase()}</p>`;
// // Vypište z názvu posledních pět písmen.
document.body.innerHTML += `<p>Posledních pět písmen je: ${title.slice(
  16,
  22,
)}`; // počítají se i mezery jako znaky
document.body.innerHTML += '<br>';
document.body.innerHTML += '<br>';
document.body.innerHTML += '<br>';

// //-----------------------------------------------------------------------------------------------------------------
// E-MAILY
// Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu
//jmeno.prijmeni@domena
// Tedy například:

// petr.novak@gmail.com
// romana.nejedla@czechitas.cz
// slavomir.ponuchalek@yahoo.com
// Postupujte dle následujících kroků.

// Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
// Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
const email = prompt(
  'Zadejte svoji e-mailovou adresu ve formátu např.petr.novak@gmail.com.',
);
// Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
const atIndex = email.indexOf('@');
// Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
// const userName = email.slice(0, atIndex);
// Dále z e-mailu získehte název domény tedy například gmail.com.
// const domain = email.slice(atIndex, +1);

// Ze získaných informací vytvořte objekt, který bude vypadat například takto:
const parsedEmail = {
  userName: email.slice(0, atIndex),
  domain: email.slice(atIndex + 1),
};
// Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec
document.body.innerHTML +=
  `<p>Zadaný e-mail je: ${email}</p>` +
  `<p>Uživatelské jméno je ${parsedEmail.userName}</p>` +
  `<p>Doména uživatele je ${parsedEmail.domain}</p>`;

document.body.innerHTML += '<br>';
document.body.innerHTML += '<br>';
document.body.innerHTML += '<br>';

// //-----------------------------------------------------------------
// DORUČOVÁNÍ

// Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.
// Uložte všechny údaje do vhodně pojmenovaných proměnných.
const street = prompt('Zadej ulici, kde bydlíš bez čísla popisného.');
const numberOfHouse = prompt('Zadej číslo popisné.');
const city = prompt('Zadej město, kde bydlíš.');
const postalCode = prompt('Zadej PSČ.');
// Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
// <address>
//   <p>Pod Stájemi 67</p>
//   <p>12754 Klysnov</p>
// </address>
// Pomocí document.body.innerHTML vložte sestavené HTML do stránky.
document.body.innerHTML += `<adress><p>${street} ${numberOfHouse}</p><p>${postalCode} ${city}</p></adress>`;
