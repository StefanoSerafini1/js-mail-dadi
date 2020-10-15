
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
