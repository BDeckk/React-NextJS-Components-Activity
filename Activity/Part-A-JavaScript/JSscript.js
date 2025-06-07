
let greetname = "User!"; //variable
let name = "Benideck J. Longakit"; //variable
const PLang = ["Programming Languages(Array)", "C", "C#", "Python", "Java"]; //array
let user = { name: "Benideck Longakit", ID_Number: "23-2707-691", age: 20 , major: "BSCpE", birthday: "September 05, 2004"}; //object

// Functions in JS
function greet(userName) {
  return `Hello, ${userName}!`;
}

function showInfo() {
  document.getElementById("greeting").innerHTML = greet(name); //call variable in htmml

    //call objecy in html
  document.getElementById("student-info").innerText = `Name: ${user.name} \n Student ID: ${user.ID_Number} \n Age: ${user.age} \n Major: ${user.major}\n Birthdate: ${user.birthday}`;

  let bdateList = document.getElementById("prog_lang"); //call array in html 
  PLang.forEach(arr1 => {
  let li = document.createElement("li");
  li.innerText = arr1;
  bdateList.appendChild(li);
  });
}

function goodbye() {
  document.getElementById("gb").innerHTML = "Goodbye, User!";
}


// DOM Manipulation
document.getElementById("title").innerText = greet(greetname);


// Event Handling

//document.getElementById("info").addEventListener("click", () => {
//  document.getElementById("output").innerText = "User, you have clicked the button!";
//});

document.getElementById("info").addEventListener("click", () => {
  document.getElementById("output").innerText = "\nUser, you have clicked the show button! Button has been disabled.";
  document.getElementById("info").disabled = true;
}, { once: true })