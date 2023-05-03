// array contenente la lista di mail
const listaMail = ['goku@gmail.com' , 'vegeta@alice.it', 'trunks@hotmail.com', 'gohan@libero.it'];
console.log(listaMail);

// chiedo all'utente di inserire la sua mail
var checkMail = prompt('inserisci la tua email');
console.log(checkMail);

// scorro l'array per verificare che la mail inserita dall'utente sia presente in lista
for (var i = 0; i < listaMail.length; i++) {
  var lista = listaMail[i];
  console.log(lista);

//   vado a confrontare gli elementi dell'array con la mail dell'utente
  if(lista == checkMail){
    var mail = true;
    console.log(mail);
  }
}

// rilascio un messaggio all'utente tramite alert
if (mail == true){
  alert('Complimenti, sei un vero SAYAN!');
}else{
  alert('Torna da dove sei venuto, inutile terrestre!');
}