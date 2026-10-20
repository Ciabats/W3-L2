/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

/*intercettare la lista(#lista-task)
-creare array conb dentro oggetti con testo, data formattata(stringa), priorità
*/



// const listaTask = document.querySelector(`#lista-task`);
// const contatore = document.querySelector(`#contatore `)

// function aggiungiTask(text, priorita) {

//   const li = document.createElement(`li`); //creo l'elemento li in js, ogni chiamata aggiunge un elemento nuovo, invece di riutilizzare lo stesso elemento

//   const badge = document.createElement(`span`);//creo lo span in js

//   const erase = document.createElement(`button`); //creo il button elimina(per ora finto)

//   li.textContent = text; //al tag li attribuisco un contenuto stringa
//   badge.textContent = priorita //lo span(badge)
//   erase.textContent = "Elimina";

//   li.classList.add(`priorita-${priorita}`); //aggiunggo la classe priorità al tag li
//   badge.classList.add(`badge`);
//   erase.getAttribute


//   listaTask.appendChild(li);
//   li.appendChild(badge);
//   li.appendChild(erase);
// }





// aggiungiTask("Pagare le bollette", "alta");
// aggiungiTask("Studiare JavaScript", "media");
// aggiungiTask("Comprare il pane", "bassa");
// aggiungiTask("Chiamare il dentista", "alta");
// aggiungiTask("Riposarsi", "bassa");





const mytask = [
  {
    titoloTask: "Pagare le bollette",
    priorita: "alta",
    data: new Date,
  },
  {
    titoloTask: "Pagare le bollette",
    priorita: "alta",
    data: new Date,
  },
  {
    titoloTask: "Pagare le bollette",
    priorita: "alta",
    data: new Date,
  },
  {
    titoloTask: "Pagare le bollette",
    priorita: "alta",
    data: new Date,
  },
  {
    titoloTask: "Pagare le bollette",
    priorita: "alta",
    data: new Date,
  },
]