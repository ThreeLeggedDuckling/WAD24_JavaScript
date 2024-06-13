const PRESENT = document.querySelectorAll('tbody td:nth-last-child(2)');
const ABSENT = document.querySelectorAll('tbody td:last-child');

function studentStatu(cell) {
    const stateCell = cell.parentElement.children[2];
    const state = cell.className;

    stateCell.textContent = state;
    cell.textContent = "";
    if(Object.values(PRESENT).includes(cell)){
        console.log("present");
        cell.nextElementSibling.textContent = "🟥";
    }
    else{
        console.log("absent");
        cell.previousElementSibling.textContent = "✅";
    }
};

PRESENT.forEach(cell => {
    cell.classList.add('present');
    cell.addEventListener('click', function(){
        studentStatu(cell);
    });
});

ABSENT.forEach(cell => {
    cell.classList.add('absent');
    cell.addEventListener('click', function(){
        studentStatu(cell);
    });
});


/*      V1

PRESENT.forEach(cell => {
    cell.addEventListener('click', function () {
        const statCell = cell.previousElementSibling;
        statCell.textContent = "Présent";
        cell.classList.add("prs");
        if (cell.nextElementSibling.classList.contains("abs")) {
            cell.nextElementSibling.classList.remove("abs");
        }
    });
});

ABSENT.forEach(cell => {
    cell.addEventListener('click', function () {
        const statCell = cell.previousElementSibling.previousElementSibling;
        statCell.textContent = "Absent";
        cell.classList.add("abs");
        if (cell.previousElementSibling.classList.contains("prs")) {
            cell.previousElementSibling.classList.remove("prs");
        }
    })
});
*/