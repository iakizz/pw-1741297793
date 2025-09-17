/* File di base con gli script JavaScript per la pagina */

// Popola dinamicamente il campo anno corrente nel footer, per mantenere aggiornato il copyright
document.getElementById('year').innerHTML = new Date().getFullYear();
