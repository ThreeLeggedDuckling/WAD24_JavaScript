/////   CREATION   /////

const P = document.createElement('p');


/////   INSERTION   /////

// à la fin du parent
const WRAPPER = document.getElementById('wrapper');
WRAPPER.append(P);

/*
    appende : ajoute autant élément qu'on veut
    appendChild : ajoute juste 1 élément
*/


/////   PARAMETRAGE   /////

/*
    Insertion -> paramétrage  OU  paramètrage -> insertion, les 2 marchent
*/

P.innerText = "Cette ligne a été injectée via JS";
P.id = "customP";
P.classList.add('customClass', 'secondCustomClass');

// Ajout style couplé CSS

P.addEventListener('mouseenter', (event) => {
    // console.log('event:', event);
    // console.log('target:', event.target);
    toggleHighlight(event.target)
});

P.addEventListener('mouseleave', (event) => {
    toggleHighlight(event.target)
})

function toggleHighlight(target){
    target.classList.toggle('highlight');
}

// Ajout style en js (-> css inline)
/*
P.addEventListener('mouseenter', (event) => {
    event.target.style.fontWeight = "bold";
    event.target.style = "font-size: 1.2em";
})

P.addEventListener('mouseleave', (event) => {
    event.target.style.fontWeight = "normal";
    event.target.style = "font-size: 1em";
})
*/


/////   SUPRESSION   /////

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const container = document.getElementById('container');

p1.remove();
container.removeChild(p2);

const addButtonsQS = document.querySelectorAll('table button.addBtn');
const addButtonsGB = document.getElementsByClassName('addBtn');

for(const btn of addButtonsQS){
    btn.addEventListener('click', (event) => {
        console.log('event target', event.target);
        console.log('parent', event.target.parentNode);
    })
}




/////   EXERCIE TODOLIST   /////

/*
    Créer prototype de To Do List.

    Créer champ dans lequel l'utilisateur peut entrer un libellé avec un bouton de validation.

    Lorsqu'on clique sur le bouton, un élément de liste se crée dans la liste avec pour contenu la valeur du champ.

    Bonus : vider le champ une fois l'élément ajouté
*/

const toDoList = document.getElementById("tdl");
const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('add');

addTaskBtn.addEventListener('click', addTask);

function addTask(){

    let safeValue = taskInput.value.trim();
    if(safeValue === "") return;

    const li = document.createElement('li');
    li.textContent = taskInput.value;
    toDoList.append(li);

    const btnbRemove = document.createElement('button');
    btnbRemove.textContent = "✖️";
    btnbRemove.addEventListener('click', removeTask);
    li.append(btnbRemove);

    taskInput.value = "";
    taskInput.focus();
}

function removeTask(event){
    event.target.parentElement.remove()
}





















/*
    const removeBtn = document.getElementById('remove');
    removeBtn.addEventListener('click', removeMatchingTask);

    function removeMatchingTask(){
        let ogLength = toDoList.children.length;

        for(let i = 0; i < toDoList.children.length; i++){
            if(toDoList.children[i].textContent == taskInput.value){
                toDoList.removeChild(toDoList.children[i]);
                console.log('match');
                i--
            }
        }
        
        if(ogLength !== toDoList.children.length){
            alert(`${ogLength - toDoList.children.length} items matching '${taskInput.value}' removed`);
        }
        else {
            alert('No match found, 0 items removed');
        }
    }
*/