const yearOfBirth = document.querySelector("#years");
const monthOfBirth = document.querySelector("#months");
const dayOfBirth = document.querySelector("#days");
const result = document.querySelector("#result");

// we need her to make a function to generate the years from (1900-2017) and day (1-31),and month(1-12)
function generateValues(from, to, element) {
	for(i = from; i <= to ; i+=1) {
    	let option = document.createElement("option");
        option.text = i;
        element.add(option);
	}
}
//and now after we make the function we can call it for the years and the monthe and the days.
generateValues(1900, 2017, yearOfBirth);
generateValues(1, 12, monthOfBirth);
generateValues(1, 31, dayOfBirth);
// this  function (generateValues ) its better than make a 3 loops inside a 3 function.


const btn = document.querySelector("#btn");

const d = new Date();
const CurrentYear = d.getFullYear();
const currentMonth = d.getMonth();
const currentDay = d.getDate();


btn.addEventListener("click",calculateAge);

function calculateAge(){
result.style.display = "flex";	
let selectYear = yearOfBirth.value;
let selectMonth = monthOfBirth.value;
let selectDay = dayOfBirth.value;
let acctualYear = ( CurrentYear - selectYear);
let acctualMonth = (currentMonth - selectMonth);
let acctualDay = Math.abs( currentDay - selectDay) ;
result.innerHTML = "you are " + acctualYear + "years ," + acctualMonth + "months and " + acctualDay + "days old ";
}


