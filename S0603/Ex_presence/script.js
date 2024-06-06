const colPresence = document.querySelectorAll('tbody>tr>td:nth-last-child(2)');
const colAbsence = document.querySelectorAll('tbody>tr>td:last-child');

colPresence.forEach(element => {
    element.addEventListener('click', function () {
        const statCell = element.previousElementSibling;
        statCell.textContent = "Présent";
        element.classList.add("prs");
        if (element.nextElementSibling.classList.contains("abs")) {
            element.nextElementSibling.classList.remove("abs");
        }
    });
});

colAbsence.forEach(element => {
    element.addEventListener('click', function () {
        const statCell = element.previousElementSibling.previousElementSibling;
        statCell.textContent = "Absent";
        element.classList.add("abs");
        if (element.previousElementSibling.classList.contains("prs")) {
            element.previousElementSibling.classList.remove("prs");
        }
    })
});