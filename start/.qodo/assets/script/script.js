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
const taskForm = document.querySelector(`#task-form`);
const prioritaTask = document.querySelector(`#priorita-task`);
const newTask = document.querySelector(`#nuovo-task`);
const aggiungi = document.querySelector(`#bottone-aggiungi`);

/* const taskData = {
  titoloTask: "",
  priorita: "",
  data: "";
} */


function aggiungiTask() {
  mytask.forEach((task, index) => {
    const li = document.createElement(`li`);
    const badge = document.createElement(`span`);
    const data = document.createElement(`span`);
    const erase = document.createElement(`button`);
    const flag = document.createElement(`input`);

    li.classList.add(`priorita-${task.priorita}`);
    badge.classList.add(`badge`);
    data.classList.add(`data`, `divData`);

    erase.setAttribute(`type`, `button`)
    erase.setAttribute(`id`, index + 1)
    erase.classList.add(`button`);


    flag.setAttribute(`type`, `checkbox`);
    flag.classList.add(`flag`)

    // Event listener sul cambio di stato della checkbox
    flag.addEventListener(`change`, () => {
      // Toggle della classe sulla task (li) per barrarla tramite la classe .flagged in CSS
      li.classList.toggle(`flagged`);
      // Toggle di un'eventuale classe anche sulla checkbox stessassss
    });

    li.textContent = task.titoloTask;
    badge.textContent = task.priorita;
    data.textContent = task.data.toLocaleDateString(`it-IT`);
    erase.textContent = "Elimina";


    listaTask.appendChild(li);
    li.appendChild(badge);
    li.appendChild(data);
    data.appendChild(erase);
    listaTask.appendChild(flag);
    listaTask.appendChild(li);
  
  });
}

aggiungiTask();

function contaPerPriorita() {
  contatore.textContent = mytask.length;
}
contaPerPriorita();




taskForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  let titoloTask = newTask.value;
  let priorita = prioritaTask.value;

  mytask.push(titoloTask);
  mytask.push(priorita);
  aggiungiTask();
  
})



listaTask.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (e.target.type === `button`) {
    mytask.splice(e.target.id-1, 1);
    aggiungiTask();
  }
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
