const colPresence = document.querySelectorAll('tbody td:nth-last-child(2)');
const colAbsence = document.querySelectorAll('tbody td:last-child');

colPresence.forEach(cell => {
    cell.addEventListener('click', function () {
        cell.previousElementSibling.textContent = "Présent";
        cell.textContent = "";
        cell.nextElementSibling.textContent = "🟥";
    });
});

colAbsence.forEach(cell => {
    cell.addEventListener('click', function () {
        cell.parentElement.children[2].textContent = "Absent";
        cell.previousElementSibling.textContent = "✅";
        cell.textContent = "";
    })
});