const babyRegForm = document.querySelector(".baby-reg-form");

// Sample data (replace with your actual data)
// var rows = [
//   { name: "John", age: 20, email: "xx@hotmail.com" },
//   { name: "Jack", age: 50, email: "xxx@hotmail.com" },
//   { name: "Son", age: 45, email: "xxxx@hotmail.com" },
// ];

// // Create an HTML table dynamically
// var html = "<table border='1|1'>";
// for (var i = 0; i < rows.length; i++) {
//   html += "<tr>";
//   html += "<td>" + rows[i].name + "</td>";
//   html += "<td>" + rows[i].age + "</td>";
//   html += "<td>" + rows[i].email + "</td>";
//   html += "</tr>";
// }
// html += "</table>";

// Display the table in an element with ID "box"
// document.querySelector(".baby-list-container").innerHTML = html;

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.querySelector(".clock").textContent = timeString;
}

// Update the clock every second
// setInterval(updateClock, 1000);

// Function to format the date in long format
function formatDateLong(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleString("en-US", options);
}

// Update the date display
function updateDate() {
  const currentDate = new Date();
  const formattedDate = formatDateLong(currentDate);
  document.querySelector(".date").textContent = formattedDate;
}

// Initial call to update the date
updateDate();

babyRegForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const babyName = document.querySelector(".baby-name").value;
  const babyAge = document.querySelector(".baby-age").value;
  const babyGender = document.querySelector(".baby-gender").value;
  const babyLocation = document.querySelector(".baby-location").value;
  const parentName = document.querySelector(".parent-name").value;
  const babyId = document.querySelector(".baby-id").value;

  const babyData = {
    name: babyName,
    age: babyAge,
    gender: babyGender,
    location: babyLocation,
    parentName: parentName,
    id: babyId,
  };
  console.log(babyData);
});

// Display baby reg form

const displayPlaceholder = document.querySelector(".baby-list-container");
const babyFormContainer = document.querySelector(".baby-reg-form-container");
const babyRegBtn = document.querySelector(".baby-reg-action-btn");
babyRegBtn.addEventListener("click", function () {
  babyFormContainer.classList.remove("hidden");
  displayPlaceholder.classList.add("hidden");
});
// babyRegBtn.addEventListener("click", function () {
//   displayPlaceholder.classList.add("hidden");
// });

// Closing baby reg form

const closeBabyReg = document.querySelector(".baby-close-btn");
closeBabyReg.addEventListener("click", function () {
  babyFormContainer.classList.add("hidden");
});
closeBabyReg.addEventListener("click", function () {
  displayPlaceholder.classList.remove("hidden");
});

// Display attendance
const babiesPresent = document.querySelector(".babies-present");
const sittersPresent = document.querySelector(".sitters-present");
let babies;
fetch("/data/babies.json")
  .then((res) => res.json())
  .then((data) => {
    babies = data;
    babiesPresent.textContent = babies.length;
  });
let sitters;
fetch("/data/sitters.json")
  .then((res) => res.json())
  .then((data) => {
    sitters = data;
    sittersPresent.textContent = sitters.length;
  });
