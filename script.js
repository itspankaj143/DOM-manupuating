let inputele = document.getElementById("user");
let para = document.querySelector("#para");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
  this.innerHTML = "DON,t distrub me";
  para.textContent = inputele.value;
});

let inputpass = document.getElementById("pass");
document.querySelector("#btn1").addEventListener("click", function (e) {
  if (inputpass.type === "password") {
    inputpass.type = "text";

    this.textContent = "Show Password";
  } else {
    inputpass.type = "password";
    this.textContent = "Hide Password";
  }
});

let from = document.querySelector("#from");
let to = document.querySelector("#to");
let btnghumaiye = document.querySelector("#ghumaiye");
btnghumaiye.addEventListener("click", () => {
  let data = from.value;
  from.value = to.value;
  to.value = data;
});

let arr = [
  { name: "Mukesh khanna", title: "Shaktimaan" },
  { name: "Rahul", title: "Pubg khelna" },
  { name: "Yash", title: "Dance karna" },
  { name: "Vinay", title: "Chakma dena" },
  { name: "Netrapal", title: "Mangal Importance" },
];

// . Mukesh khanna (Shaktimaan)
// . Rahul (Pubg khelna)
// . Yash (Dance karna)
// . Vinay (Chakma dena)
// . Netrapal (Mangal Importance)

let list = document.querySelector("#list");
let data = arr.map((ele) => {
  return `<li>${ele.name} (${ele.title})</li>`;
});
// list.innerHTML = data;
list.innerHTML = data.join("");
console.log(data);
