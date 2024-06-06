const colPresence = document.querySelectorAll('tbody tr')[0].children[3];
const colAbsence = document.querySelectorAll('tbody tr')[0].children[4];
const colState = document.querySelectorAll('tbody tr')[0].children[2];

function isPrs() {
    
};

// colPresence.forEach(element => {
//     element.addEventListener('click', function () {
//         const statCell = element.previousElementSibling;
//         statCell.textContent = "Présent";
//         element.classList.add("prs");
//         if (element.nextElementSibling.classList.contains("abs")) {
//             element.nextElementSibling.classList.remove("abs");
//         }
//     });
// });

// colAbsence.forEach(element => {
//     element.addEventListener('click', function () {
//         const statCell = element.previousElementSibling.previousElementSibling;
//         statCell.textContent = "Absent";
//         element.classList.add("abs");
//         if (element.previousElementSibling.classList.contains("prs")) {
//             element.previousElementSibling.classList.remove("prs");
//         }
//     })
// });