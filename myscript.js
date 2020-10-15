
//1° es richiesta email e convalida se presente

var email = ["a@boolean.careers", "b@boolean.careers", "c@boolean.careers"];

console.log(email);

var newEmail = prompt('Inserisci la tua mail').toLowerCase();
console.log(newEmail);

var emailtf = false;
//ciclo for per controllo presenza mailmail
for (var i = 0; i < email.length; i++) {
  var check = email[i];

  if (check == newEmail) {
    var emailtf = true;
  }
}
//ciclo if per stampa sia console che a schermo
if (emailtf === true) {
  console.log('Login done: ' + newEmail);
  document.getElementById('emaildone').innerHTML = 'Login effettuato: ' + newEmail;
} else {
  console.log('email non corretta: ' + newEmail);
  document.getElementById('emaildone').innerHTML = 'email non corretta: ' + newEmail;
}

//2° esercizio gioco dei dadi utente contro pc

btn.addEventListener("click", function () {
var btn = document.getElementById('btn');
var user = Math.floor(Math.random() * 6 + 1);
var pc = Math.floor(Math.random() * 6 + 1);

document.getElementById('user').innerHTML = 'il risulato del tuo lancio è  ' + user;
document.getElementById('pc').innerHTML = 'il risulato del lancio del tuo avversario  ' +  pc;

if (user > pc) {
    console.log("Vince il giocatore!");
    document.getElementById('risultato').innerHTML = 'HAI VINTO';
} else if (pc > user) {
    console.log("Vince il computer!");
    document.getElementById('risultato').innerHTML = 'HAI PERSO';
} else {
    console.log("Avete pareggiato!");
    document.getElementById('risultato').innerHTML = 'PAREGGIO';
}
});
