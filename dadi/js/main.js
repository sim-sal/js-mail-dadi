// chiedo il nome del giocatore
var userName = prompt("Sei pronto a giocare a dadi campione? Dimmi come ti chiami e iniziamo.");
console.log(userName);

// genero i numeri casuali per il giocatore
var userNumber =  Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

// genero i numeri casuali per il computer
var robotNumber =  Math.floor(Math.random() * 6) + 1;
console.log(robotNumber);

// genero le condizioni per confrontare i risultati dei numeri generati casualmente 
if (userNumber > robotNumber){
    alert("Complimenti campione! HAI VINTO!")
}else if(userNumber < robotNumber){
    alert("Mi dispiace...hai perso. Ma resti comunque un campione!")
}else{
    alert("PAREGGIO! Questa volta uomo e macchina si equivalgono.")
}
