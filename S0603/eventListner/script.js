const inpFname = document.getElementById("fname");
const inpGname = document.getElementById("gname");
const inpAge = document.getElementById("age");
const btn = document.getElementById("btn");

btn.addEventListener('click', function() {
    const fullName = inpFname.value + " " + inpGname.value;
    const age = inpAge.valueAsNumber;
    const age5Y = age + 5;
    alert("Bonjour " + fullName + " vous avez " + age + " et dans 5 ans vous aurez " + age5Y);
});