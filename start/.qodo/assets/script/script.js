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
-creare array con dentro oggetti con testo, data formattata(stringa), priorità(alta-media-bassa)
-scrivere glòi oggetti nella lista
-intercettare lo span con il contatore
-sostituire il contenuto dello span col numero degli oggetti nell'array*/


const mytask = [
  {
    titoloTask: "Pagare le bollette",
    priorita: "alta",
    data: new Date,
  },
  {
    titoloTask: "Studiare JavaScript",
    priorita: "media",
    data: new Date,
  },
  {
    titoloTask: "Comporare il pane",
    priorita: "bassa",
    data: new Date,
  },
  {
    titoloTask: "Chiamare il dentista",
    priorita: "alta",
    data: new Date,
  },
  {
    titoloTask: "Riposarsi",
    priorita: "bassa",
    data: new Date,
  },
]

const listaTask = document.querySelector(`#lista-task`);
const contatore = document.querySelector(`#contatore `);
const inputTask = document.querySelector(`#nuovo-task`);
const aggiugngi = document.querySelector(`#bottone-aggiungi`);

/* const taskData = {
  titoloTask: "",
  priorita: "",
  data: "";
} */

function aggiungiTask(){
  mytask.forEach(task => {
    const li = document.createElement(`li`);
    const badge = document.createElement(`span`);
    const data = document.createElement(`span`);
    const erase = document.createElement(`button`);

    li.classList.add(`priorita-${task.priorita}`)
    badge.classList.add(`badge`)
    data.classList.add(`data`,`divData`)
    erase.classList.add(`button`)


    li.textContent = task.titoloTask;
    badge.textContent = task.priorita;
    data.textContent = task.data.toLocaleDateString(`it-IT`);
    erase.textContent = "Elimina";

    listaTask.appendChild(li);
    li.appendChild(badge);
    li.appendChild(data);
    data.appendChild(erase);

    listaTask.appendChild(li);

  });
}

function contaPerPriorita() {
  contatore.textContent = mytask.length;
}

aggiungiTask();
contaPerPriorita();


inputTask.addEventListener(`change`, (e) => {
  console.log(inputTask.value);
})

// aggiugngi.addEventListener(`click`, (e) => {
//   e.preventDefault();
//   if (valid) {
    
//   }
//   console.log(`Task aggiunta alla lista`)
  //taskData.titoloTask = inputTask.value;
  //taskDats.piorita = inputTask.value
// })



function createTask(params) {
  
}




__________________________________________________________________________________________________________________________________________
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
