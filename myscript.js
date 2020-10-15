
//1° es richiesta email e convalida se presente

var email = ["michele@boolean.careers", "fabio@boolean.careers", "roberto@boolean.careers"];

console.log(email);

var newEmail = prompt('Log in with your e-mail please').toLowerCase();
console.log(newEmail);

var emailtf = false;

for (var i = 0; i < email.length; i++) {
  var check = email[i];

  if (check == newEmail) {
    emailtf = true;
  }
}
